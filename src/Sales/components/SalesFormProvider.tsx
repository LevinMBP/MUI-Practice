import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Sales from './Sales';
import { zodResolver } from '@hookform/resolvers/zod';
import { defaultValues, SalesSchema } from '../types/schema';
import type { Schema } from '../types/schema';

const SalesFormProvider: React.FC = () => {
    const methods = useForm<Schema>({
        mode: 'all',
        resolver: zodResolver(SalesSchema),
        defaultValues: defaultValues
    });

    useEffect(() => {
        const subscribe = methods.watch((value) => {
            console.log(value);
        });
        return () => subscribe.unsubscribe();
    }, [methods.watch])

    return (
        <FormProvider {...methods}>
            <Sales />
        </FormProvider>
    )
}

export default SalesFormProvider