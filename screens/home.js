import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {addCount, decreaseCount} from '../actions/count';
import {connect, useSelector} from 'react-redux';
import {setName} from '../actions/name';

function Home(props) {
  const {valueCount} = props;
  const {name} = props;
  function _onPress() {
    const newValue = valueCount + 1;
    props.addCount(newValue);
  }

  function _onDecrease() {
    const decreaseValue = valueCount - 1;
    props.decreaseCount(decreaseValue);
  }

  function _changeName() {
    const nameValue = 'test';
    props.setName('nameValue');
  }
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Text>{`Name : ${name}`}</Text>
      <Text>{`Count : ${valueCount}`}</Text>
      <Button title={'+ Count'} onPress={() => _onPress()}></Button>
      <Button title={'- Count'} onPress={() => _onDecrease()}></Button>
      <Button title={'change name'} onPress={() => _changeName()}></Button>
      <Button
        title={'console log name'}
        onPress={() => console.log(name)}></Button>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  const {valueCount} = state.count;
  const {name} = state.name;
  return {valueCount, name};
};

const mapDispatchToProps = dispatch => {
  return {
    addCount: args => dispatch(addCount(args)),
    decreaseCount: args => dispatch(decreaseCount(args)),
    setName: args => dispatch(setName(args)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
