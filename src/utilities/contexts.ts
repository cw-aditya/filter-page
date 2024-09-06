import { createContext, useState } from "react";

export type ContextType = {
    context: {
        filters: {
            budget: {
                min: number,
                max: number,
            },
            fuelType: any,
            sortBy: string
        }
    },
    setContext: any
}

export type DataContextType = {
    data: {

    }
}

export const globalDataContext = createContext<DataContextType|null>(null)
export const globalContext = createContext<ContextType|null>(null)
