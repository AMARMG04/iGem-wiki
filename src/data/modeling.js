export const modeling = [
    {
        "title": "Computational Modelling",
        "content": "Peptide-polymer modelling and studying their dynamics through Molecular Dynamics (MD) Simulation played a crucial role in our project. The binding efficiency and interaction between specific peptides and their respective polymers were confirmed through computational modelling analysis."
    },
    {
        "title": "Molecular Dynamics Simulation",
        "content": "For the MD simulation, we used coarse-grain models, which are simplified representations of complex systems. By grouping multiple atoms into single interaction sites or coarse-grained particles, we decreased computational costs, extended simulation times, and modelled larger systems."
    },
    {
        "title": "Software Used",
        "content": "We used GROMACS for simulations of proteins, lipids, and nucleic acids. PolyPly, a Python suite, facilitated the generation of input files and system coordinates for our simulations. PolyPly supported the Martini 2 and 3 force fields for modelling microplastics such as polystyrene, polyethylene, and polypropylene."
    },
    {
        "title": "Modelling Microplastics",
        "content": "Our team focused on three prevalent microplastics: polystyrene, polyethylene, and polypropylene. The polymers were fixed to a specific chain length to obtain microplastics of similar molecular weight (~80 kDa)."
    },
    {
        "title": "Simulation Steps",
        "content": [
            "Create .pdb files of the atomistic model of MP-binding peptides using PyMOL.",
            "Convert atomistic models of peptides to coarse-grain structures and topologies using martinize.py in GROMACS.",
            "Convert .pdb files of coarse-grain structures into .gro files.",
            "Increase the number of peptides in the simulation box using the 'gmx insert-molecules' command.",
            "Add the MD simulated polymer into the simulation box containing peptides.",
            "Solvate the peptide-polymer system.",
            "Add ions to the system and perform neutralization.",
            "Run energy minimization of the system.",
            "Perform short NpT and NvT equilibration.",
            "Complete the MD simulation.",
            "Visualize the dynamics simulation using the VMD tool."
        ]
    },
    {
        "title": "Analysis",
        "content": "We conducted analyses to evaluate the binding propensities of peptides with microplastics, including the calculation of contact numbers, the dynamicity of interactions, the Radial Distribution Function (RDF), and the Solvent Accessible Surface Area (SASA)."
    }
];