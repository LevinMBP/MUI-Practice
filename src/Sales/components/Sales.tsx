import React from 'react'
import { FormControl, InputLabel, Stack, useColorScheme } from '@mui/material'
import AutoCompleteAsync from './AutoCompleteAsync'
import type { Schema } from '../types/schema'
import { Select, MenuItem } from '@mui/material';


const Sales: React.FC = () => {
    // const { mode, setMode } = useColorScheme();
    return (
        <Stack sx={{ gap: 2 }}>
            <AutoCompleteAsync<Schema>
                name="states"
                options={
                    [{ id: '1', label: "State 1" }]
                }
                label='Select Something'
            />
            <FormControl size='small'>
                <InputLabel id="demo-select">Select Screen Mode</InputLabel>
                <Select
                    labelId='demo-select'
                    id='demo-simple-select'
                    label="Select Screen Mode"
                >
                    <MenuItem value="system">System</MenuItem>
                    <MenuItem value="light">Light</MenuItem>
                    <MenuItem value="dark">Dark</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    )
}

export default Sales