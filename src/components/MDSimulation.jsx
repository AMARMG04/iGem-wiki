import { ArrowDownIcon } from "lucide-react";

export default function MDSimulation() {
  const steps = [
    "Create .pdb files of an atomistic model of the MP binding peptides using PyMOL",
    "Convert atomistic models of peptides to coarse-grain structures and topologies using martinize.py in GROMACS",
    "Convert .pdb files of coarse-grain structures into .gro files",
    "Increase the number of peptides in the simulation box using the 'gmx insert-molecules' command",
    "Add the MD simulated polymer into the simulation box containing peptides",
    "Solvate the peptide-polymer system",
    "Add ions to the system and perform neutralization",
    "Run energy minimization of the system",
    "Perform short NpT and NvT equilibration",
    "Complete the MD simulation",
    "Visualise the dynamics simulation using the VMD tool",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-nohemi_sb text-center mb-8">MD Simulation Process</h1>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center font-inter">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-4 shadow-lg w-full max-w-2xl">
              <div className="flex items-center">
                <div className="bg-white text-blue-500 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                  {index + 1}
                </div>
                <p className="text-lg">{step}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <ArrowDownIcon className="text-gray-400 my-2" size={24} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}