
import React,{ useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {sagaActions} from "../redux/saga/SagaActions.js";
import { setLoading, setNewsList } from '../redux/slices/NewsSlices'
import { NewsList } from '../components/NewsList';
import { Loader } from '../components/Loader';

const Home = () => {
    const dispatch = useDispatch();
    const { newsList, isLoading } = useSelector(state => state.newsReducer);

    useEffect(() => {
        dispatch(setLoading(true));
        dispatch({type: sagaActions.FETCH_NEWS_DATA_SAGA});
    },[]);


    const onPressLike = (selectedItem) => {
        const updatedList = newsList.map(item => {
            return {
                ...item,
                isFavourite: item.uniqueId == selectedItem.uniqueId ? !selectedItem.isFavourite : item.isFavourite
            }
        });
        dispatch(setNewsList(updatedList));
    }

    return (
        <SafeAreaView style={styles.container}>
            { isLoading ? <Loader /> : <NewsList newsList={newsList} onPressLike={onPressLike}/> }

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor:'#f8f8ff',
    },
});


export default Home;
