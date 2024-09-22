import { FaFlask, FaDna } from 'react-icons/fa';

const protocols = [
  {
    id: 'pre-culture',
    title: 'Pre-culture',
    icon: <FaFlask className="text-xl" />,
    content: (
      <div className="text-gray-700 mt-4">
        <p>Prepare 200mL (2 x 100 mL) LB broth and inoculate a loop of E.coli K-12 into one of them. Incubate in a shaker for 15 hours at 37°C at 250 rpm. The other one acts as a blank.</p>
        <p>Let it grow overnight. Check OD after 15 hours and ensure the OD is 0.6.</p>
        <strong>Competent Cell Preparation:</strong>
        <ol className="list-decimal list-inside space-y-1">
          <li>Transfer the 0.6 OD culture into 4 microfuge tubes (1.5 ml of culture).</li>
          <li>Centrifuge at 4000 rpm at 4°C for 10 mins.</li>
          <li>Resuspend the pellet in 300 μL chilled CaCl2.</li>
          <li>Incubate for 15 min at 4°C.</li>
          <li>Centrifuge at 4000 rpm at 4°C for 10 mins.</li>
          <li>Resuspend the pellet in 700 μL chilled CaCl2.</li>
          <li>Incubate for 15 min at 4°C.</li>
          <li>Resuspend the pellet in 100 μL CaCl2.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'competent-cell-preparation',
    title: 'Competent Cell Preparation',
    icon: <FaFlask className="text-xl" />,
    content: (
      <div className="text-gray-700 mt-4">
        <strong>Procedure:</strong>
        <ol className="list-decimal list-inside space-y-1">
          <li>Transfer the 0.6 OD culture into 4 microfuge tubes (1.5 ml of culture).</li>
          <li>Centrifuge at 4000 rpm at 4°C for 10 mins.</li>
          <li>Resuspend the pellet in 300 μL chilled CaCl2.</li>
          <li>Incubate for 15 min at 4°C.</li>
          <li>Repeat centrifugation and resuspend in 700 μL chilled CaCl2.</li>
          <li>Incubate for 15 min at 4°C.</li>
          <li>Resuspend the pellet in 100 μL CaCl2.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'transformation',
    title: 'Transformation',
    icon: <FaFlask className="text-xl" />,
    content: (
      <div className="text-gray-700 mt-4">
        <strong>Procedure:</strong>
        <ol className="list-decimal list-inside space-y-1">
          <li>Resuspend 10 μL sterile water in ampicillin-resistant plasmid.</li>
          <li>Add 2μL of plasmid in 1 microfuge tube. Others act as controls.</li>
          <li>Incubate the vials at 4°C for 30 mins.</li>
          <li>Heat shock the vials at 42°C for 90 seconds.</li>
          <li>Place vials at 4°C for 30 mins.</li>
          <li>Add 500 μL of prepared LB broth (kept at 4°C) into each vial.</li>
          <li>Incubate in a shaker at 37°C, 200 rpm, for 4 hours.</li>
        </ol>
        <div className="mt-4">
          <strong>Spread Plate Results:</strong>
          <table className="min-w-full bg-white border border-gray-300 mt-2">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">S.No</th>
                <th className="px-4 py-2 border">Competent Cell</th>
                <th className="px-4 py-2 border">Plasmid</th>
                <th className="px-4 py-2 border">Ampicillin</th>
                <th className="px-4 py-2 border">Expected Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">1</td>
                <td className="px-4 py-2 border">Yes</td>
                <td className="px-4 py-2 border">Yes</td>
                <td className="px-4 py-2 border">Yes</td>
                <td className="px-4 py-2 border">Growth of colonies (Transformed cells)</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-4 py-2 border">2</td>
                <td className="px-4 py-2 border">Yes</td>
                <td className="px-4 py-2 border">No</td>
                <td className="px-4 py-2 border">Yes</td>
                <td className="px-4 py-2 border">No colonies (No transformation)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">3</td>
                <td className="px-4 py-2 border">Yes</td>
                <td className="px-4 py-2 border">No</td>
                <td className="px-4 py-2 border">No</td>
                <td className="px-4 py-2 border">Growth of colonies (Viable competent cells)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: 'sonication',
    title: 'Sonication',
    icon: <FaFlask className="text-xl" />,
    content: (
      <div className="text-gray-700 mt-4">
        <strong>Materials Required:</strong>
        <ul className="list-disc list-inside">
          <li>Tris-HCl</li>
          <li>NaCl</li>
          <li>PMSF (Inhibitors)</li>
          <li>1% SDS</li>
        </ul>
        <strong>Procedure:</strong>
        <ol className="list-decimal list-inside space-y-1">
          <li>Place the sonicator probe at 20 kHz frequency.</li>
          <li>Sonicate cells in a 100 mL falcon tube in an ice bath (1 s on, 3 s off).</li>
          <li>Centrifuge at 10,000 rpm for 20 min at 4°C.</li>
          <li>Transfer supernatant and estimate protein.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'tricinesds',
    title: 'Tricine SDS-PAGE',
    icon: <FaFlask className="text-xl" />,
    content: (
      <div className="text-gray-700 mt-4">
        <strong>Reagents:</strong>
        <ul className="list-disc list-inside">
          <li>Glycerol</li>
          <li>TEMED</li>
          <li>Mercaptoethanol</li>
          <li>Ammonium persulfate</li>
        </ul>
        <strong>Procedure:</strong>
        <ol className="list-decimal list-inside space-y-1">
          <li>Prepare AB-3 or AB-6 stock solutions for gels.</li>
          <li>Overlay gels with water and let them polymerize.</li>
          <li>Cast a 4% sample gel, followed by 10% and 16% gels.</li>
          <li>Proceed with electrophoresis as per standard protocol.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'bradford',
    title: 'Bradford Test',
    icon: <FaFlask className="text-xl" />,
    content: (
      <div className="text-gray-700 mt-4">
        <p>The Bradford assay is used to measure protein concentration. Coomassie Brilliant Blue dye binds to proteins and causes a shift in absorbance, which can be measured spectrophotometrically.</p>
      </div>
    ),
  },
];

export default protocols;
