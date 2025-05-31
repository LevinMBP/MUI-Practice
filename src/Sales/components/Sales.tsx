import React from 'react'
import { Stack } from '@mui/material'
import AutoCompleteAsync from './AutoCompleteAsync'
import type { Schema } from '../types/schema'

const Sales: React.FC = () => {
    return (
        <Stack sx={{ gap: 2 }}>
            <AutoCompleteAsync<Schema>
                name="states"
                options={
                    [{ id: '1', label: "State 1" }]
                }
                label='Select Something'
            />
        </Stack>
    )
}

export default Sales