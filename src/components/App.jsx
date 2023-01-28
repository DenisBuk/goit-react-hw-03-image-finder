import React, { Component } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import API from './apiServices/PixabayAPI';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal'

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            imageSearch: '',
            images: [],
            status: 'idle',
            page: 1,
            buttonMore: false,
            biggerimage: '',
            showModal: false,
            error: '',
        };

        this.loadMore = this.loadMore.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };


    componentDidUpdate(prevProps, prevState) { 
        const prevName = prevState.imageSearch;
        const nextName = this.state.imageSearch;
        const prevPage = prevState.page;
        const nextPage = this.state.page;

        if (prevName !== nextName) {
            this.status({ status: 'pending', page: 1, images: [] });
            this.fetchImages(nextName, nextPage);
        }
        if (prevPage !== nextPage) { 
            this.fetchImages(nextName, nextPage)
        }
     }

    fetchImages(nextName, nextPage) { 
        API.fetchImages(nextName, nextPage)
            .then(data => {
                this.setState(prevState => {
                    return {
                        prevState,
                        images: [...prevState.images, ...data.hits],
                        status: 'resolved',
                        imageSearch: nextName,
                    };
                });

                if (this.prevPage !== nextPage) {
                    window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: 'smooth',
                    });
                }
            })
            .catch(error => this.setState({ error, status: 'rejectd' }));
    }
    
    handleSubmit = name => {
        this.fetchImages(name, this.state.page);
    };

    toggleModal = largeImageURL => {
        this.setState(({ showModal, biggerimage }) => ({
            showModal: !showModal,
            biggerimage: largeImageURL,
        }));
    };

    closeModal = () => { 
        this.setState(() => ({
            showModal: false,
        }));
    };

    loadMore() {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }));
    }

    render() {
        return(
        <div>
            <Searchbar onSubmit={this.handleFormSubmit} />
            {this.state.status === 'idle' && <p>Enter your request...</p>}
            <ImageGallery
                images={this.state.images}
                toggleModal={largeImageURL => this.toggleModal(largeImageURL)} />
            {this.state.status === 'pending' && <Loader />}
            {this.state.images.length !== 0 && <Button loadMore={this.loadMore} />} 

            {this.state.showModal && (
                <Modal
                    onClick={() => {
                        this.toggleModal()
                    }}
            images={this.state.biggerimage}
            closeModal={ this.closeModal}
              />  
            )}
            <ToastContainer autoClose={3000} />
            {this.state.images.length === 0 && this.state.status === 'resolved' ? (
                <div>On Request {this.state.imageSearch} not found</div>
            ) : null}
            {this.state.status === 'rejected' && <div>{this.state.error}</div>}
        </div>
        );
    }
}        

export default App;