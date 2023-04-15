
import React,{ useEffect, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NewsList } from '../components/NewsList';
import { Loader } from '../components/Loader';

const Favourite = () => {
    const dispatch = useDispatch();
    const { newsList } = useSelector(state => state.newsReducer);
    const [favouriteList, setFavouriteList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      let filterdList = newsList.filter(item => item.isFavourite);
      setFavouriteList(filterdList);
      setLoading(false)
    },[newsList]);


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
            { isLoading ? 
                <Loader /> 
                : 
                <>
                    { favouriteList.length ? 
                    <NewsList newsList={favouriteList} onPressLike={onPressLike}/>
                    :
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Text>You don't have any favourite news.</Text>
                    </View>
                    }
                </> 
            }
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor:'#f8f8ff',
    },
});


export default Favourite;
