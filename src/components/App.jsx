import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages, needValues } from './Api/Api';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
    
    state = {
        images: [],
        searchQuery: '',
        page: 1,
        error: null,
        isLoading: false,
        showModal: false,
        largeImageURL: '',
        tags: '',
    };

    componentDidUpdate(prevProps, prevState) {
        const prevSearchQuery = prevState.searchQuery;
        const nextSearchQuery = this.state.searchQuery;
        const prevPage = prevState.page;
        const page = this.state.page;

        if (prevSearchQuery !== nextSearchQuery || prevPage !== page) { }
        this.renderGallery();
    }
    

    renderGallery = async () => {
        const { searchQuery, page } = this.state;
        this.setState({ isLoading: true });

        try {
            const { hits, totalHits } = await fetchImages(searchQuery, page);

            if (totalHits === 0) {
                toast.warn(
                    'Sorry. Please try again.'
                );
            }

            const newImages = needValues(hits);

            this.setState(({ images }) => ({
                images: [...images, ...newImages],
                totalHits,
            }));
        } catch (error) {
            this.setState({ error });
            toast.error('Something went wrong');
        } finally {
            this.setState({ isLoading: false });
        }
    };
    
    onFormSubmit = searchQuery => {
        this.setState({ searchQuery, images: [], page: 1 });
    };
    
    onLoadMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }));
    };
    
    openModal = (largeImageURL, tags) => {
        this.toggleModal();
        this.setState({
            largeImageURL,
            tags,
        });
    };
    
    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    }
}

render() 
    const { images, isLoading, largeImageURL, tags, showModal, totalHits } = this.state;

    const allImages = images.length === totalHits;

           <>
            <Searchbar onSubmit={this.onFormSubmit} />
            <ToastContainer autoClose={4000} />
            <ImageGallery images={images} onOpenModal={this.openModal} />
            {isLoading && <Loader />}

            {images.length !== 0 && !isLoading && !allImages && (
                <Button onClick={this.onLoadMore} />
            )}
            {showModal && (
                <Modal
                    onModalClick={this.toggleModal}
                    largeImage={largeImageURL}
                    alt={tags}
                />
            )}
        </>
    
 

