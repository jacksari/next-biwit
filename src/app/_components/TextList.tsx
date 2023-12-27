"use client";
// import { trpc } from "../_trpc/trpc";

import { trpc } from "../_trpc/client";

export default function TextList() {
    const {data} = trpc.addData.useQuery({text: 'client'});
    // console.log('data', data);
    return (
        <div>
            {data?.message}
        </div>
    );
}