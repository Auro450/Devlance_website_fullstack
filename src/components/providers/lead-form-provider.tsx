"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { LeadFormModal } from "@/components/ui/lead-form-modal";

interface LeadFormContextType {
  openLeadForm: () => void;
  closeLeadForm: () => void;
}

const LeadFormContext = createContext<LeadFormContextType | undefined>(undefined);

export function LeadFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadForm = () => setIsOpen(true);
  const closeLeadForm = () => setIsOpen(false);

  return (
    <LeadFormContext.Provider value={{ openLeadForm, closeLeadForm }}>
      {children}
      {isOpen && <LeadFormModal onClose={closeLeadForm} />}
    </LeadFormContext.Provider>
  );
}

export function useLeadForm() {
  const context = useContext(LeadFormContext);
  if (!context) {
    throw new Error("useLeadForm must be used within a LeadFormProvider");
  }
  return context;
}
