"use client";
import { AnimatePresence, motion } from "framer-motion";
import AlertItem from "./AlertItem";

export default function AlertsPanel({ alerts, onApply, onDismiss, max }) {
  const list = max ? alerts.slice(0, max) : alerts;
  return (
    <div>
      <AnimatePresence mode="popLayout">
        {list.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-cg-subtle text-sm py-6"
          >
            All systems nominal. No active alerts.
          </motion.p>
        ) : (
          <motion.div layout className="space-y-3">
            {list.map((a) => (
              <AlertItem key={a.id} alert={a} onApply={onApply} onDismiss={onDismiss} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
