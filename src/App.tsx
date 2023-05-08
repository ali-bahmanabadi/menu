import * as React from 'react';
// import Footer from '@footer';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

import { BrowserRouter } from 'react-router-dom';
import DataTable from './components/table/DataTable';
import ComboBox from './components/combo';

import { JSXElementConstructor, ReactElement, useState } from 'react';

// import { userSchema } from './components/validation';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AutocompleteField from './Combo';
import IntegrationNotistack, { MyApp } from './components/Snackbar/Snackbar';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { fetchLogin } from './app/loginSlice';

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
        nameId: yup.number().required('bagh bagh'),
        age: yup.number().required('yeee').min(1, 'miiiin'),
    });

    const {
        // register,
        handleSubmit,
        control,
        // formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
    });

    const handler = (a: any, b: any, c: any, name: any) => {
        if (!b) return;
        // setData({
        //     ...data,
        //     nameId: b.label,
        // });
    };

    // console.log(errors);

    const onSubmit = (event: any) => {
        event.preventDefault();
        let formData = {
            name: event.target[0].value,
            name2: event.target[4].value,
        };
        // console.log('formData', event.target[0].value);
        handleSubmit((d) => console.log(d));
    };
    console.log(process.env);
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <main>
                    <Sidebar />
                </main>
                <MyApp />
                <br />
                <button onClick={() => dispatch(fetchLogin())}>get data</button>
                <form onSubmit={handleSubmit((d) => console.log(d))}>
                    {/* <Controller
                        name="name"
                        as={
                            <Autocomplete
                                value={list.find((item) => data === item.id)}
                                onChange={(event: any, newValue: any) => {
                                    setData(newValue ? newValue.id : null);
                                }}
                                disablePortal
                                options={list}
                                sx={{ width: 300 }}
                                renderInput={(params) => (
                                    <TextField {...params} />
                                )}
                            />
                        }
                        onChange={() => ''}
                        control={control}
                    /> */}

                    {/* <Controller
                        name={'name'}
                        control={control}
                        render={({ field }) => {
                            const { onChange, value } = field;
                            // console.log(value);

                            return (
                                <Autocomplete
                                    value={
                                        value
                                            ? list.find(
                                                  (item) => data === item.id
                                              ) ?? null
                                            : null
                                    }
                                    onChange={(event: any, newValue: any) => {
                                        onChange(newValue ? newValue.id : null);
                                    }}
                                    // disablePortal
                                    options={list}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
                                    )}
                                />
                            );
                        }}
                    /> */}

                    <AutocompleteField
                        name={'nameId'}
                        options={list}
                        control={control}
                        placeholder={'enter name'}
                        dValue={1}
                    />
                    <AutocompleteField
                        name={'age'}
                        options={ages}
                        control={control}
                        placeholder={'enter age'}
                        dValue={200}
                    />

                    <input type="submit" />
                </form>
            </div>
        </BrowserRouter>
    );
}

export default App;
