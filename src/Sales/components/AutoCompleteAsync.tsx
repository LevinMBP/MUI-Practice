import React from 'react'
import { Autocomplete, Box, TextField } from '@mui/material';
import { Controller, useFormContext, type FieldValues, type Path } from 'react-hook-form'
import type { Option } from '../../Types/option';

type Props<T extends FieldValues> = {
    name: Path<T>;
    options: Option[];
    label: string;
}

const AutoCompleteAsync = <T extends FieldValues>({ name, options, label }: Props<T>) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
                <Autocomplete
                    options={options}
                    value={value}
                    onChange={onChange}
                    // getOptionLabel={(option) => option.label}
                    multiple
                    size='small'    // Small and Medium only
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            fullWidth
                            inputRef={ref}
                            error={!!error}
                            helperText={error?.message}
                            label={label}
                        />
                    )}
                    renderOption={(props, option, { selected }) => {
                        const {key, ...rest} = props;
                        return (
                        <Box component={"li"} key={key} {...rest}>
                            {option.label}
                        </Box>
                    )}}
                />
            )}
        />
    )
}

export default AutoCompleteAsync