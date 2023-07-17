/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import TextInputs from './TextInputs';
import ModalForm from './ModalForm';

const FormContact = ({
  visible,
  onBack,
  onCancel,
  onSubmit,
  image = '',
  isAddItem,
  item = null,
  ...props
}) => {
  const [datas, setdatas] = useState({
    age: 0,
    firstName: '',
    lastName: '',
    photo: 'string',
  });
  const [errors, seterrors] = useState({});

  useEffect(() => {
    if (!isAddItem) {
      setdatas(props.route.params.data);
    }
    if (item) {
      setdatas(item);
    }
  }, [isAddItem, item]);

  const submit = () => {
    const {age = 0, firstName = '', lastName = '', photo = ''} = datas;

    if (firstName === '' && firstName.length <= 2) {
      seterrors({...errors, firstName: 'First Name field is min 3 character'});
    } else if (lastName === '' && lastName.length <= 2) {
      seterrors({
        ...errors,
        firstName: '',
        lastName: 'Last Name field is min 3 character',
      });
    } else if (age <= 0) {
      seterrors({...errors, lastName: '', age: 'Age field is required'});
    } else {
      seterrors({
        ...errors,
        age: '',
        firstName: '',
        lastName: '',
        photo: '',
      });
      onSubmit({age, firstName, lastName, photo});
    }
  };
  const cancel = () => {
    setdatas({});
    seterrors({});
    onBack();
  };
  return (
    <ModalForm
      visible={visible}
      onBack={cancel}
      onCancel={cancel}
      onSubmit={submit}
      image={image}>
      <View>
        <TextInputs
          isError={errors.firstName}
          error={errors.firstName}
          placeholder="First name"
          value={datas.firstName}
          onChangeText={val => {
            setdatas({...datas, firstName: val});
          }}
        />
      </View>
      <TextInputs
        isError={errors.lastName}
        error={errors.lastName}
        placeholder="Last name"
        value={datas.lastName}
        onChangeText={val => {
          setdatas({...datas, lastName: val});
        }}
      />
      <TextInputs
        isError={errors.age}
        error={errors.age}
        placeholder="Age year"
        keyboardType="numeric"
        value={datas.age}
        onChangeText={val => {
          setdatas({...datas, age: val});
        }}
      />
    </ModalForm>
  );
};

export default FormContact;
