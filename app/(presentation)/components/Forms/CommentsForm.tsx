import { CommentEntity } from '@/app/domain/entities/Comments/Comment.Entity';
import { Formik } from 'formik';
import { Button, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import { object, number, string, ObjectSchema } from 'yup';

export default function CommentsForm(props:any){


    let FormComments: ObjectSchema<CommentEntity> = object({
      message:string().defined().required("El campo mensaje es obligatorio."),
      owner: string().defined().required("El campo propietario ID es obligatorio."),
      post: string().defined().min(10).max(500).required("El Id Post es obligatorio.")
    });

    return (
        
    <View>
        <Formik
        initialValues={{message:'', owner:'', post:'' }}
        validationSchema={FormComments}
        onSubmit={(values)=>{
            console.log("Valores del formulario ", values); 
            alert("Estoy en el componente del formulario"); 
            if (values.message!="") {
               props.handleSubmitApi(values); 
            }
                      
        }}
        >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched})=>(
                <View>
                    <TextInput
                    placeholder='Post Id'
                    onChangeText={handleChange('post')}
                    onBlur={handleBlur('post')}
                    value={values.post}
                    style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
                    ></TextInput>
                    {touched.post && errors.post && (
                        <Text style={{color:'red'}} >{errors.post}</Text>
                    )}
                    
                    <TextInput
                    placeholder='owner Id'
                    onChangeText={handleChange('owner')}
                    onBlur={handleBlur('owner')}
                    value={values.owner}
                    style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
                    ></TextInput>
                    {touched.owner && errors.owner && (
                        <Text style={{color:'red'}} >{errors.owner}</Text>
                    )}


                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        placeholder='message Id'
                        onChangeText={handleChange('message')}
                        onBlur={handleBlur('message')}
                        value={values.message}
                        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
                    ></TextInput>
                    {touched.message && errors.message && (
                        <Text style={{color:'red'}} >{errors.message}</Text>
                    )}

                     <Button onPress={()=>{handleSubmit()}} title="Enviar" />
                </View>
            )}
 

        </Formik>
    </View>  
       
    );



}