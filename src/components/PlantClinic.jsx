import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const PlantClinic = () => {
  return (
    <section className="w-full  py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 space-y-5"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Plant Clinic Analysis
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Upload a clear photo of your plant and get an instant AI-powered
            diagnosis along with expert treatment recommendations to help your
            plants thrive.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
            Diagnose Your Plant
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/garden.jpg"
            alt="Plant Clinic"
            className="rounded-2xl shadow-md w-full max-w-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PlantClinic;
