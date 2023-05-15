import * as React from 'react';
// import Footer from '@footer';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import { BrowserRouter, useLocation } from 'react-router-dom';
import DataTable from './components/table/DataTable';
import ComboBox from './components/combo';

import { JSXElementConstructor, ReactElement, useState } from 'react';

// import { userSchema } from './components/validation';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AutocompleteField from './Combo';
import IntegrationNotistack, { MyApp } from './components/Snackbar/Snackbar';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchLogin } from './app/loginSlice';
import Ali from './components/Ali/Ali';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

const list = [
    {
        id: 1,
        label: 'title 1',
    },
    {
        id: 2,
        label: 'title 2',
    },
];
const ages = [
    {
        id: 10,
        label: 'title 1',
    },
    {
        id: 200,
        label: 'title 2',
    },
];

function App() {
    // const [data, setData] = useState(0);

    // console.log(data);

    const dispatch = useAppDispatch();

    const selectLogin = useAppSelector((state) => state.login.data);

    React.useEffect(() => {}, []);

    const userSchema = yup.object().shape({
        // nameId: yup.number().required('bagh bagh'),
        // age: yup.number().required('yeee').min(1, 'miiiin'),
    });

    const {
        // register,
        handleSubmit,
        control,
        // formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues: {
            type: 'other',
        },
    });

    const handler = (a: any, b: any, c: any, name: any) => {
        if (!b) return;
        // setData({
        //     ...data,
        //     nameId: b.label,
        // });
    };

    const onSubmit = (event: any) => {
        event.preventDefault();
        let formData = {
            name: event.target[0].value,
            name2: event.target[4].value,
        };
        // console.log('formData', event.target[0].value);
        handleSubmit((d) => console.log(d));
    };

    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <main>
                    <Sidebar />
                </main>
                <a href="#page=create">ff</a>
                <button onClick={() => (window.location.hash = 'ali')}>
                    hash
                </button>
                <Ali />
                <form action="" onSubmit={handleSubmit((d) => console.log(d))}>
                    <Controller
                        control={control}
                        name="type"
                        // defaultValue=""
                        render={({ field: { onChange, value } }) => (
                            <RadioGroup
                                // {...field}
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                onChange={(event, value) => onChange(value)}
                                value={value}
                            >
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio />}
                                    label="Other"
                                />
                            </RadioGroup>

                            // <IonRadioGroup
                            //     value={value}
                            //     onIonChange={({ detail: { value } }) =>
                            //         onChange(value)
                            //     }
                            // >
                            //     <IonItem>
                            //         <IonLabel>Type 2</IonLabel>
                            //         <IonRadio value="2" slot="start" />
                            //     </IonItem>

                            //     <IonItem>
                            //         <IonLabel>Type 4</IonLabel>
                            //         <IonRadio slot="start" value="4" />
                            //     </IonItem>

                            //     <IonItem>
                            //         <IonLabel>Type 6</IonLabel>
                            //         <IonRadio slot="start" value="6" />
                            //     </IonItem>
                            // </IonRadioGroup>
                        )}
                    />
                    <input type="submit" value="submit" />
                </form>
            </div>
        </BrowserRouter>
    );
}

export default App;
