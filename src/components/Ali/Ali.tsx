import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import {
    useForm,
    FormProvider,
    useFormContext,
    Controller,
} from 'react-hook-form';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import * as yup from 'yup';

const Ali = () => {
    const loc = useLocation();

    const step = Number(loc.pathname.replace('/', '')) - 1;

    const schema = [
        yup.object().shape({
            name: yup.string().required('fill string!'),
            // age: yup.number().required('required!!!'),
        }),
        yup.object().shape({
            name: yup.string().required('fill string!'),
            age: yup.number().required('required!!!'),
        }),
    ];

    const ss = yup.object().shape({
        name: yup.string().required('fill string!'),
        age: yup.number().required('required!!!'),
    });

    const methods = useForm({
        resolver: yupResolver(schema[step]),
        defaultValues: {
            name: '',
            age: null,
        },
    });
    const nav = useNavigate();

    const OnSubmit = (data: any) => {
        console.log(data);
        nav('/2');
    };

    return (
        <form id="ali" onSubmit={methods.handleSubmit(OnSubmit)}>
            <FormProvider {...methods}>
                <Routes>
                    <Route path="/1" element={<Page1 />} />
                    <Route path="/2" element={<Page2 />} />
                </Routes>
            </FormProvider>
        </form>
    );
};

const Page1 = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    // console.log(errors);
    return (
        <div>
            <h1>Page 1</h1>
            <Controller
                control={control}
                name={'name'}
                render={({ field }) => {
                    return <input {...field} />;
                }}
            />
            <h2>{errors?.name?.message as string}</h2>
            <input form="ali" type="submit" />
        </div>
    );
};

const Page2 = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <div>
            <h1>Page 2</h1>
            <Controller
                name={'age'}
                control={control}
                render={({ field }) => {
                    return <input type="number" {...field} />;
                }}
            />
            <h2>{errors?.age?.message as string}</h2>
            <input form="ali" type="submit" />
        </div>
    );
};

export default Ali;
