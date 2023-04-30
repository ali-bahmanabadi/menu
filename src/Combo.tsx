import * as React from 'react';
import { Controller, Control, Path, FieldValues } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// interface RHFAutocompleteFieldProps<
//     O extends { id: string; label: string },
//     TField extends FieldValues
// > {
//     control: Control<TField>;
//     name: Path<TField>;
//     options: O[];
//     placeholder?: string;
// }

interface Type {
    name: string;
    options: any[];
    control: any;
    placeholder: string;
    dValue: any;
}

const AutocompleteField: React.FC<Type> = ({
    control,
    options,
    name,
    placeholder,
    dValue,
    // register,
}) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={{
                required: 'this field is required',
            }}
            defaultValue={dValue}
            // {...register}
            render={({ field, fieldState: { error } }) => {
                const { onChange, value, ref } = field;
                return (
                    <>
                        <Autocomplete
                            value={
                                value
                                    ? options.find((option) => {
                                          return value === option.id;
                                      }) ?? null
                                    : null
                            }
                            getOptionLabel={(option) => option.label}
                            onChange={(event: any, newValue) => {
                                onChange(newValue ? newValue.id : null);
                            }}
                            id="controllable-states-demo"
                            options={options}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder={placeholder}
                                    inputRef={ref}
                                    error={error ? true : false}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                        {/* {error ? (
                            <span style={{ color: 'red' }}>
                                {error.message}
                            </span>
                        ) : null} */}
                    </>
                );
            }}
        />
    );
};

export default AutocompleteField;
