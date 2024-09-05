import { createContext, useState } from "react";

export type ContextType = {
    context: {
        data: any,
        filters: {
            budget: {
                min: number,
                max: number,
            },
            fuelType: any
        }
    },
    setContext: any
}


export const globalContext = createContext<ContextType|null>(null)
