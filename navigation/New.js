import React from 'react'
import { View, Text,TouchableOpacity } from 'react-native'
import {Ionicons} from "react-native-vector-icons"
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../food-app/src/components/AppButton';
import AppForm from '../../food-app/src/components/forms/AppForm';
import AppFormFeilds from '../../food-app/src/components/forms/AppFormFeilds';
import Signup from '../Screen/Signup';

const New = () => {
    return (
        <View>
       <AppForm>
           <AppFormFeilds
           name='email'
           placeholder='Your email'
           keyboardType='email-address'
           />
            <AppFormFeilds
           name='password'
           placeholder='Your password'
           autoCompleteType="off"
           password={false}
           />
           <AppButton 
           title={Login}/>
       </AppForm>
       <Text style={styles.join}>
       Not a member?{' '}
       <Text
         onPress={() => navigation.navigate('Signup')}
         style={{ color: colors.primary }}
       >
         Sign Up
       </Text>
     </Text>
     </View>
    )
}
export default New
