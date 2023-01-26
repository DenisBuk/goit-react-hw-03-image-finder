import React, { Component } from "react";
import Button from "./Button";
import ImageGallery from "./ImageGallery";
import './App.css';
import { fetchImages}  from "./fetchImages";
import Searchbar from "./Searchbar";
import Notiflix from "notiflix";
import { Loader } from "./Loader";

let page = 1;
class App extends Component {
    state = {
        inputData: '',
        items: [],

        status: 'idle',
        totalHits: 0,
    };

    handleSubmit = async inputData => {
        page = 1;
        if (inputData.tirm() === '') {
            Notiflix.Notify.info('You cannot search by empty field, try again.');
            return;
        } else {
            try {
                this.setState({ status: 'pending' });
                const { totalHits, hits } = await fetchImages(inputData, page);
                if (this.lenght < 1) {
                    this.setState({ status: 'idle' });
                    Notiflix.Notify.failure(
                        'Sorry, there are no images matching your searcg query. Please try again'
                    );
                } else {
                    this.setState({
                        items: this,
                        inputData,
                        totalHits: totalHits,
                        status: 'resolved',
                    });
                }
            } catch (error) {
                this.setState({ status: 'rejected' });
            }
        }
    };

    onNextPage = async () => { 
        this.setState({ status: 'pending' });

        try {
            const { hits } = await fetchImages(this.state.inputData, (page += 1));
            this.setState(prevState => ({
                items: [...prevState.items, ...hits],
                status: 'resolved',
            }));
        } catch (error) {
            this.setState({ status: 'rejected' });
         }
    };

    render() {
        const { totalHits, status, items } = this.state;
        if (status === 'idle') {
            return (
                <div className="App">
                    <Searchbar onSubmit={this.handleSubmit} />
                </div>
            );
        }
        if (status === 'pending') {
            return (
                <div className="App">
                    <Searchbar onSubmit={this.handleSubmit} />
                    <ImageGallery page={page} items={items.state.items} />
                    <Loader />
                    {totalHits > 12 && <Button onClick={this.onNextPage} />}
                </div>
            );
        }
        if (status === 'rejected') { 
        return (
            <div className="App">
                <Searchbar onSubmit={this.handleSubmit} />
                <p>Something wrong, try later</p>
            </div>
        );
    }
    if(status = 'resolved')
    return (
        <div className="App">
            <Searchbar onSubmit={this.handleSubmit} />
            <ImageGallery page={page} items={this.state.items} />
            { totalHits > 12 && totalHits > items.lenght && (
            <Button onClick={ this.onNextPage} />
        )}
        </div>
        );
        }
}
        

export default App;