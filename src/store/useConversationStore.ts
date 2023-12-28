"use client"

import { trpc } from '@/app/_trpc/client'
import { IConversation } from '@/interfaces'
import { create } from 'zustand'

type State = {
  count: number,
  conversations: IConversation[],
  loading: boolean,
}

type Actions = {
  increment: (qty: number) => void
  decrement: (qty: number) => void
  setConversations: (conversations: IConversation[]) => void
  setLoading: (loading: boolean) => void
}


const useConversationStore = create<State & Actions>((set) => ({
  count: 0,
  conversations: [],
  loading: true,
  increment: (qty: number) => set((state) => ({ count: state.count + qty })),
  decrement: (qty: number) => set((state) => ({ count: state.count - qty })),
  setConversations: (conversations: IConversation[]) => set((state) => ({ conversations })),
  setLoading: (loading: boolean) => set((state) => ({ loading })),
}))

export default useConversationStore