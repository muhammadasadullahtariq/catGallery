import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, FlatList,Image} from 'react-native';
import getBreeds from './src/api/getBreeds';
import getCats from './src/api/getCats';
import DropDownPicker from 'react-native-dropdown-picker';

const App = () => {
  const [breeds, setBreeds] = useState([
    {name: 'Loading...', value: 'Loading...'},
  ]);
  const [open, setOpen] = useState(false);
  const [cats, setCats] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('bamb');

  useEffect(() => {
    (async () => {
      const breeds = await getBreeds();
      setBreeds(breeds);
      console.log(breeds);
    })();
    (async () => {
      const cats = await getCats(selectedBreed);
      setCats(cats);
      console.log(cats);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const cats = await getCats(selectedBreed);
      setCats(cats);
      console.log(cats);
    })();
  }, [selectedBreed]);

  return (
    <SafeAreaView style={styles.container}>
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        value={selectedBreed}
        setValue={setSelectedBreed}
        schema={{
          label: 'name',
          value: 'id',
        }}
        items={breeds}
      />
      <FlatList
        data={cats}
        renderItem={({item}) => (
          <Image source={{uri: item.url}} style={styles.image} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
});

export default App;
