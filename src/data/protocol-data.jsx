
import { FaFlask, FaDna } from 'react-icons/fa';

const protocols = [
  {
    id: 'protocol1',
    title: 'Protocol for Nile Red Fluorescence Method',
    icon: <FaFlask className="text-xl" />, // Icon for this protocol
    content: (
      <div className="text-gray-700 mt-4">
        <p>
          <strong>Based on:</strong> Zuriani, R., Vigneswari, S., Azizan, M.N.M. et al. A high throughput Nile red fluorescence method for rapid quantification of intracellular bacterial polyhydroxyalkanoates. Biotechnol Bioproc E 18, 472–478 (2013).{' '}
          <a href="https://doi.org/10.1007/s12257-012-0607-z" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            https://doi.org/10.1007/s12257-012-0607-z
          </a>
        </p>
        <div className="mt-4">
          <strong>Consumables:</strong>
          <ul className="list-disc list-inside">
            <li>MilliQ</li>
            <li>Nile Red Stock (80 µg/ml Nile Red in DMSO)</li>
            <li>DMSO</li>
            <li>Aluminum foil</li>
          </ul>
        </div>
        <div className="mt-4">
          <strong>Equipment:</strong>
          <ul className="list-disc list-inside">
            <li>Pipette</li>
            <li>Centrifuge</li>
            <li>Vortexer</li>
            <li>96-well plate reader</li>
          </ul>
        </div>
        <div className="mt-4">
          <strong>Protocol:</strong>
          <ol className="list-decimal list-inside space-y-1">
            <li>Centrifuge 1 mL cell suspension (Cell concentration 0.5-1.0mg/mL) (12000g, 5min) (Ideally use 0.8mg/mL cell concentrations).</li>
            <li>Discard supernatant and resuspend in 1 mL MilliQ.</li>
            <li>Add 40 µL Nile Red stock to solution (80µg/mL in DMSO; 3.1µg/mL suspension).</li>
            <li>Incubate at room temperature for 30min.</li>
            <li>Centrifuge (12000 g, 5min).</li>
            <li>Discard supernatant and resuspend pellet in 1 mL MilliQ.</li>
            <li>Vortex vigorously until fully resuspended.</li>
            <li>Aliquot into 96-well plate (200µL).</li>
            <li>
              Measure fluorescence.
              <ol className="list-alpha list-inside pl-4">
                <li>Excitation= 535nm</li>
                <li>Emission= 605nm</li>
              </ol>
            </li>
            <li>Determine PHA concentration from nile red fluorescence intensity using a PHA calibration curve.</li>
          </ol>
        </div>
        <div className="mt-4">
          <strong>Antibiotic Preparation:</strong>
          <table className="min-w-full bg-white border border-gray-300 mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">Antibiotic</th>
                <th className="px-4 py-2 border">Solvent</th>
                <th className="px-4 py-2 border">Solvent Volume</th>
                <th className="px-4 py-2 border">Concentration (1000x final concentration)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Ampicillin</td>
                <td className="px-4 py-2 border">Sterile milliQ water</td>
                <td className="px-4 py-2 border">20 mL</td>
                <td className="px-4 py-2 border">100 g/L</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-4 py-2 border">Kanamycin</td>
                <td className="px-4 py-2 border">Sterile milliQ water</td>
                <td className="px-4 py-2 border">20 mL</td>
                <td className="px-4 py-2 border">50 g/L</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Tetracycline</td>
                <td className="px-4 py-2 border">70% ethanol</td>
                <td className="px-4 py-2 border">20 mL</td>
                <td className="px-4 py-2 border">10 g/L</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'protocol2',
    title: 'Protocol for DNA Extraction',
    icon: <FaDna className="text-xl" />, // Icon for this protocol
    content: (
      <div className="text-gray-700 mt-4">
        <p>
          <strong>Overview:</strong> This protocol describes the steps required to extract DNA from bacterial cultures using a simple lysis method.
        </p>
        <div className="mt-4">
          <strong>Consumables:</strong>
          <ul className="list-disc list-inside">
            <li>Tris-EDTA (TE) Buffer</li>
            <li>SDS</li>
            <li>Proteinase K</li>
            <li>Phenol:Chloroform:Isoamyl Alcohol</li>
          </ul>
        </div>
        <div className="mt-4">
          <strong>Equipment:</strong>
          <ul className="list-disc list-inside">
            <li>Pipette</li>
            <li>Centrifuge</li>
            <li>Vortexer</li>
            <li>Water bath</li>
          </ul>
        </div>
        <div className="mt-4">
          <strong>Protocol:</strong>
          <ol className="list-decimal list-inside space-y-1">
            <li>Pellet cells by centrifugation at 10,000g for 5 min.</li>
            <li>Resuspend the pellet in 500 µL of TE buffer.</li>
            <li>Add 50 µL of 10% SDS and 10 µL of Proteinase K (10 mg/mL).</li>
            <li>Incubate at 37°C for 1 hour.</li>
            <li>Add 500 µL of Phenol:Chloroform:Isoamyl Alcohol (25:24:1).</li>
            <li>Vortex vigorously and centrifuge at 10,000g for 10 min.</li>
            <li>Transfer the aqueous layer to a new tube.</li>
            <li>Add 2 volumes of cold ethanol to precipitate the DNA.</li>
            <li>Incubate at -20°C for 30 min, then centrifuge at 10,000g for 10 min.</li>
            <li>Wash the DNA pellet with 70% ethanol and air dry.</li>
            <li>Resuspend the DNA pellet in 50 µL of TE buffer.</li>
          </ol>
        </div>
      </div>
    ),
  },
  // Add more protocols as needed
];

export default protocols;
