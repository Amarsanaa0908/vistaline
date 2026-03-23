"use client"

import ConfirmModal from "@/components/ui/confirm-modal"
import { createContext, useContext, useState } from "react"

const ConfirmModalContext = createContext(null)

export function ConfirmModalProvider({ children }) {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "Are you sure?",
    message: "This action cannot be undone.",
    confirmText: "Yes",
    cancelText: "No",
    onConfirm: () => {},
  })

  const confirm = ({
    title = "Are you sure?",
    message = "This action cannot be undone.",
    confirmText = "Yes",
    cancelText = "No",
    onConfirm,
  } = {}) => {
    // If onConfirm callback is provided, use callback pattern
    if (onConfirm) {
      setModalState({
        isOpen: true,
        title,
        message,
        confirmText,
        cancelText,
        onConfirm: () => {
          onConfirm()
          setModalState((prev) => ({ ...prev, isOpen: false }))
        },
      })
      return
    }

    // Otherwise, use promise pattern
    return new Promise((resolve) => {
      setModalState({
        isOpen: true,
        title,
        message,
        confirmText,
        cancelText,
        onConfirm: () => {
          resolve(true)
          setModalState((prev) => ({ ...prev, isOpen: false }))
        },
      })
    })
  }

  const handleClose = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <ConfirmModalContext.Provider value={{ confirm }}>
      {children}
      <ConfirmModal
        isOpen={modalState.isOpen}
        onClose={handleClose}
        onConfirm={modalState.onConfirm}
        title={modalState.title}
        message={modalState.message}
        confirmText={modalState.confirmText}
        cancelText={modalState.cancelText}
      />
    </ConfirmModalContext.Provider>
  )
}

export function useConfirm() {
  const context = useContext(ConfirmModalContext)
  if (!context) {
    throw new Error("useConfirm must be used within ConfirmModalProvider")
  }
  return context.confirm
}
