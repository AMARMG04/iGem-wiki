import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import NewBanner from "../components/NewBanner";

const protocols = [
  {
    id: 'pre-culture',
    title: 'Pre-culture',
    content: (
      <div className="text-gray-700 mt-4">
        <p>Prepare 200mL (2 x 100 mL) LB broth and inoculate a loop of E.coli K-12 into one of them. Incubate in a shaker for 15 hours at 37°C at 250 rpm. The other one acts as a blank.</p>
        <p>Let it grow overnight. After 15 hours, check the optical density (OD) and ensure it is 0.6.</p>
      </div>
    ),
  },
  {
    id: 'competent-cell-preparation',
    title: 'Competent Cell Preparation',
    content: (
      <div className="text-gray-700 mt-4">
        <strong>Procedure:</strong>
        <ol className="list-decimal list-inside space-y-1">
          <li>Transfer 1.5 mL of the 0.6 OD culture into 4 microfuge tubes.</li>
          <li>Centrifuge at 4000 rpm at 4°C for 10 mins.</li>
          <li>Resuspend the pellet in 300 μL chilled CaCl2.</li>
          <li>Incubate for 15 min at 4°C.</li>
          <li>Repeat centrifugation at 4000 rpm at 4°C for 10 mins.</li>
          <li>Resuspend in 700 μL chilled CaCl2 and incubate for another 15 mins at 4°C.</li>
          <li>Resuspend the final pellet in 100 μL chilled CaCl2.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'transformation',
    title: 'Transformation',
    content: (
      <div className="text-gray-700 mt-4">
        <strong>A. Procedure:</strong>
        <ol className="list-decimal list-inside space-y-1">
          <li>Resuspend 10 μL sterile water in ampicillin-resistant plasmid.</li>
          <li>Add 2μL of plasmid into 1 microfuge tube. Others act as control.</li>
          <li>Incubate the vials at 4°C for 30 mins.</li>
          <li>Prepare water bath to reach 42°C.</li>
          <li>Heat shock the vials at 42°C for 90 seconds.</li>
          <li>Immediately place the vials at 4°C for 30 mins.</li>
          <li>Add 500 μL of prepared LB broth at 4°C to each vial and incubate at 37°C in a shaker for 4 hours.</li>
          <li>Do spread plates for transformed and control cells on various agars, incubate overnight.</li>
        </ol>
        <strong>B. Results:</strong>
        <table class="min-w-full border-collapse border border-gray-300">
  <thead>
    <tr>
      <th class="border border-gray-300 px-4 py-2">S.no</th>
      <th class="border border-gray-300 px-4 py-2">Competent Cell</th>
      <th class="border border-gray-300 px-4 py-2">Plasmid</th>
      <th class="border border-gray-300 px-4 py-2">Ampicillin</th>
      <th class="border border-gray-300 px-4 py-2">Expected Result</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-gray-300 px-4 py-2">1.</td>
      <td class="border border-gray-300 px-4 py-2">Yes</td>
      <td class="border border-gray-300 px-4 py-2">Yes</td>
      <td class="border border-gray-300 px-4 py-2">Yes</td>
      <td class="border border-gray-300 px-4 py-2">Growth of colonies (Transformed cells)</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2">2.</td>
      <td class="border border-gray-300 px-4 py-2">Yes</td>
      <td class="border border-gray-300 px-4 py-2">No</td>
      <td class="border border-gray-300 px-4 py-2">Yes</td>
      <td class="border border-gray-300 px-4 py-2">Absence of colonies (No transformation, no resistance)</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2">3.</td>
      <td class="border border-gray-300 px-4 py-2">Yes</td>
      <td class="border border-gray-300 px-4 py-2">No</td>
      <td class="border border-gray-300 px-4 py-2">No</td>
      <td class="border border-gray-300 px-4 py-2">Growth of colonies (Competent cells are viable)</td>
    </tr>
    <tr>
      <td class="border border-gray-300 px-4 py-2">4.</td>
      <td class="border border-gray-300 px-4 py-2">Yes</td>
      <td class="border border-gray-300 px-4 py-2">Yes</td>
      <td class="border border-gray-300 px-4 py-2">No</td>
      <td class="border border-gray-300 px-4 py-2">Growth of colonies</td>
    </tr>
  </tbody>
</table>

      </div>
      
    ),
  },
  {
    id: 'sonication',
    title: 'Sonication',
    content: (
      <div className="text-gray-700 mt-4">
        <strong>Materials Required:</strong>
        <ol className="list-decimal list-inside space-y-1">
          <li>Tris-HCl (ph=?)</li>
          <li>Nacl (conc=?)</li>
          <li>Inhibitors (PMSF) (conc=?)</li>
          <li>SDS(1%)</li>
         
        </ol>
        <strong>Procedure:</strong>
        <ol className="list-decimal list-inside space-y-1">
          <li>Prepare sonicator with a frequency of 20 kHz.</li>
          <li>Place cells in 100 mL falcon tube and sonicate for set intervals (e.g., 1 sec on, 3 sec off).</li>
          <li>Centrifuge at 10,000 rpm for 20 min at 4°C to pellet debris.</li>
          <li>Transfer supernatants to a new falcon tube and label.</li>
          <li>Estimate a protein and run a tricine SDS PAGE.</li>
        </ol>
      </div>
    ),
  },
  {
    id: 'tricine-sds-page',
    title: 'Tricine SDS-PAGE',
    content: (
      <div className="text-gray-700 mt-4">
        <strong>Reagents:</strong>
        <ul className="list-disc list-inside space-y-1">
          <li>Glycerol</li>
          <li>Tetramethylethylenediamine (TEMED)</li>
          <li>Mercaptoethanol</li>
          <li>Ammonium persulfate</li>
        </ul>
        
        <strong>Reducing Sample Buffers:</strong>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Buffer A:</strong> 12% SDS (wt/vol), 6% mercaptoethanol (vol/vol), 30% glycerol (wt/vol), 0.05% Coomassie blue R-250, 150 mM Tris/HCl (pH 7.0)
          </li>
          <li>
            <strong>Buffer A/4:</strong> Buffer A diluted with 3 volumes of water.
          </li>
          <li>
            <strong>Buffer C:</strong> Buffer A without glycerol.
          </li>
        </ul>
  
        <strong>Non-Reducing Sample Buffers:</strong>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Buffer B:</strong> 12% SDS (wt/vol), 30% glycerol (wt/vol), 0.05% Coomassie blue (G-250), 150 mM Tris/HCl (pH 7.0)
          </li>
          <li>
            <strong>Buffer B/4:</strong> Buffer B diluted with 3 volumes of water.
          </li>
          <li>
            <strong>Buffer D:</strong> Buffer B without glycerol.
          </li>
        </ul>
  
        <strong>Electrode Buffer (Semi-Dry Transfer Only):</strong>
        <p>300 mM Tris, 100 mM acetic acid (pH 8.6).</p>
  
        <strong>Reagent Preparation:</strong>
        <p>
          <strong>AB-3 Stock Solution:</strong> For the acrylamide-bisacrylamide (AB)-3 stock solution (49.5% T, 3% C mixture), dissolve 48 g of acrylamide and 1.5 g of bisacrylamide (each twice-crystallized) in 100 mL of water. 
        </p>
        <p>
          For the AB-6 stock solution (49.5% T, 6% C mixture), which is needed only for optimal resolution of small proteins and peptides, dissolve 46.5 g of acrylamide and 3 g of bisacrylamide in 100 mL of water. 
        </p>
        <p>Keep the solutions at 7–10 °C, because crystallization occurs at 4°C.</p>
  
        <strong>Procedure:</strong>
        <ol className="list-decimal list-inside space-y-1">
          
            <strong>1.CASTING THE GEL (2 hr):</strong> 
            <h2>Protocol for Preparing Acrylamide Gels</h2> <ul> <li><strong>Step 1: Select and Prepare the Gel Mixtures</strong> <ul> <li>Select the appropriate base (separating) gel.</li> <li>Prepare two gel mixtures with 10% and 16% acrylamide, respectively, using the amounts specified in the table below.</li> <li><strong>Note:</strong> Do not degas the gel mixtures, as the gel buffer contains SDS.</li> </ul> </li> <li><strong>Step 2: Pour and Polymerize the Gels</strong> <ul> <li>Pour the gel mixtures into the gel mold.</li> <li>Overlay the poured gels with several drops of water.</li> <li>Allow the gels to polymerize for approximately 30 minutes.</li> </ul> </li> <li><strong>Step 3: Add the Spacer Gel (Optional)</strong> <ul> <li>If desired, overlay the 16% separating gel with a 1-cm 10% gel (spacer gel).</li> <li><strong>Note:</strong> The 16% separating gel and the overlaid 10% spacer gel can be polymerized together if no glycerol is added to the 10% acrylamide gel mixture.</li> <li>This step can help sharpen the bands for proteins and peptides of 1–5 kDa.</li> </ul> </li> </ul>
            <div className="mt-2">
              <table className="border-collapse border border-gray-300">
                <thead>
                  <tr>
                  <th className="border border-gray-300 px-4 py-2"></th>
                    <th className="border border-gray-300 px-4 py-2">4% Sample Gel</th>
                    <th className="border border-gray-300 px-4 py-2">10% Gel</th>
                    <th className="border border-gray-300 px-4 py-2">16% Gel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td className="border border-gray-300 px-4 py-2">AB-3 (mL):</td>
                    <td className="border border-gray-300 px-4 py-2"> 1</td>
                    <td className="border border-gray-300 px-4 py-2">6</td>
                    <td className="border border-gray-300 px-4 py-2">10</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Gel Buffer (3X) (mL):</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">10</td>
                    <td className="border border-gray-300 px-4 py-2">10</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Glycerol (g): </td>
                    <td className="border border-gray-300 px-4 py-2">-</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                    <td className="border border-gray-300 px-4 py-2">3</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Add Water to Final Volume (mL):</td>
                    <td className="border border-gray-300 px-4 py-2">12</td>
                    <td className="border border-gray-300 px-4 py-2">30</td>
                    <td className="border border-gray-300 px-4 py-2">30</td>
                  </tr>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">Polymerize by adding:</th>
                    
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                    APS (10%) (µL):</td>
                    <td className="border border-gray-300 px-4 py-2">90</td>
                    <td className="border border-gray-300 px-4 py-2">150</td>
                    <td className="border border-gray-300 px-4 py-2">100</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">TEMED (µL):</td>
                    <td className="border border-gray-300 px-4 py-2">9</td>
                    <td className="border border-gray-300 px-4 py-2">15</td>
                    <td className="border border-gray-300 px-4 py-2">10</td>
                  </tr>

                </tbody>
              </table>
            </div>
        
           
         
          
        
            <strong>2.SAMPLE PREPARATION AND PROTEIN LOADING:</strong> 
            <ul> <li><strong>Adjusting Protein Concentrations</strong> <ul> <li>Concentrate samples using techniques that don't increase salt concentration, such as ultrafiltration.</li> <li>Aim for a protein concentration of 0.1 mg/mL for each protein band.</li> <li>Roughly 0.2–1 μg of protein for each protein band (in 0.7 × 5 mm gel strips) is sufficient for Coomassie staining.</li> </ul> </li> <li><strong>Sample Preparation</strong> <ul> <li>Mix samples with SDS-containing sample buffers.</li> <li>The volume and buffer used depend on the sample origin.</li> <li>For pellet samples: <ul> <li>Resuspend the pellet in 15–20 μL of buffer A/4 or B/4.</li> <li>Incubate at 37 °C for 15 min or up to 60 min for pellet samples.</li> </ul> </li> </ul> </li> <li><strong>Loading Samples onto the Gel</strong> <ul> <li>Mount the gels in the vertical electrophoresis apparatus.</li> <li>Add anode buffer as the lower electrode buffer and cathode buffer as the upper electrode buffer.</li> <li>Load 10-μL sample volumes into the sample wells.</li> <li>Reducing the amount of SDS facilitates electrophoretic separation of peptides from the bulk of SDS.</li> </ul> </li> </ul>
             
          
          
            <strong> 3.ELECTROPHORESIS:</strong>
            <ul> <li><strong>Setting Initial Voltage and Current</strong> <ul> <li>Set the initial voltage as 30 V.</li> <li>Maintain the voltage at 30 V until the sample has completely entered the stacking gel.</li> <li>The initial current may be as high as 80 mA for a 0.7-mm 10% gel.</li> </ul> </li> <li><strong>Adjusting Voltage during Electrophoresis</strong> <ul> <li>After the sample has entered the stacking gel, the next appropriate voltage step can be applied.</li> <li>Approaching the end of the run, voltage can be gradually increased to shorten the total time of electrophoresis.</li> </ul> </li> </ul>
            
             <table className="border-collapse border border-gray-300 mt-2">
              <thead>
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Parameter</th>
                  <th className="border border-gray-300 px-4 py-2">10% (0.7 mm)</th>
                  <th className="border border-gray-300 px-4 py-2">16% (0.7 mm)</th>
                  <th className="border border-gray-300 px-4 py-2">16% (1.6 mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Initial Voltage</td>
                  <td className="border border-gray-300 px-4 py-2">30 V</td>
                  <td className="border border-gray-300 px-4 py-2">30 V</td>
                  <td className="border border-gray-300 px-4 py-2">30 V</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Next Voltage Step</td>
                  <td className="border border-gray-300 px-4 py-2">190 V</td>
                  <td className="border border-gray-300 px-4 py-2">200 V</td>
                  <td className="border border-gray-300 px-4 py-2">250 V</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Current</td>
                  <td className="border border-gray-300 px-4 py-2">70-80 mA</td>
                  <td className="border border-gray-300 px-4 py-2">70-80 mA</td>
                  <td className="border border-gray-300 px-4 py-2">100-120 mA</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Total Time</td>
                  <td className="border border-gray-300 px-4 py-2">1.5–2 hr</td>
                  <td className="border border-gray-300 px-4 py-2">2–3 hr</td>
                  <td className="border border-gray-300 px-4 py-2">2–3 hr</td>
                </tr>
              </tbody>
            </table>
            <ul> <li><strong>4.Staining </strong> <ul> <li>Visualize proteins directly in the gel by Coomassie staining or silver staining.</li> <li>Alternatively, transfer proteins to a PVDF membrane by electroblotting.</li> </ul> </li> <li><strong>Coomassie Staining</strong> <ul> <li><strong>Fixing</strong> <ul> <li>Incubate the gel in fixing solution for:</li> <ul> <li>15 min for 0.7-mm 10% acrylamide gels</li> <li>30 min for 0.7-mm 16% acrylamide gels</li> <li>60 min for 1.6-mm 16% acrylamide gels</li> </ul> </ul> </li> <li><strong>Staining</strong> <ul> <li>Stain the gel with 0.025% Coomassie dye in 10% acetic acid for twice the length of time used for fixing.</li> </ul> </li> <li><strong>Destaining</strong> <ul> <li>Destain the gel twice in 10% acetic acid, with each incubation lasting 15–60 min.</li> </ul> </li> <li><strong>Final Steps</strong> <ul> <li>Transfer the gel to water.</li> <li>Coomassie-stained gels can be reused for silver staining after removing protein-bound Coomassie dye by washing with:</li> <ul> <li>50% methanol</li> <li>50mM ammonium hydrogen carbonate</li> <li>Followed by washing with water</li> </ul> </ul> </li> </ul> </li> </ul>
            <ul> <li><strong>Time Duration</strong> <ul> <li>Casting gel: 2 h</li> <li>Sample preparation and loading: 30 min to 1 h</li> <li>Electrophoresis: 4–16 h</li> <li>Coomassie blue staining: 1.5–5 h</li> </ul> </li> </ul>
        </ol>
      </div>
    ),
  },
  
  {
    id: 'fplc',
    title: 'FPLC',
    content: (
      <div className="text-gray-700 mt-4">
        <strong>Procedure:</strong>
        <ul>
  <li><strong>A. Materials/Reagents</strong>
    <ul>
      <li>a. AKTAxpress FPLC Machine</li>
      <li>b. 1L Binding buffer (300 mM NaCl, 10 mM imidazole, 20 mM Tris HCl, pH 8.0)</li>
      <li>c. 1L Recharge buffer (0.1 M NiSO4)</li>
      <li>d. 1L Chelating buffer (50 mM EDTA pH8.0)</li>
      <li>e. 1L Water</li>
      <li>f. 1L 0.5 M NaOH</li>
      <li>g. 1L 20% Ethanol</li>
      <li>h. 1L Elution buffer (300 mM NaCl, 300 mM imidazole, 20 mM Tris HCl, pH 8.0)</li>
      <li>i. 1L Dialysis buffer (100 mM NaCl, 20 mM Tris HCl, pH 7)</li>
    </ul>
  </li>

  <li><strong>B. Sample Preparation</strong>
    <ul>
      <li>a. Cell pellets harvested by centrifugation and stored at -80 °C were resuspended in a lysis buffer (300 mM NaCl, 10 mM imidazole, 20 mM Tris HCl, pH 8.0)</li>
      <li>b. The resuspended cells were sonicated for 10 minutes (with 10 second pulses and 50 seconds rest)</li>
      <li>c. The lysate was then clarified by centrifugation at 40,000 x g for 45 minutes</li>
    </ul>
  </li>

  <li><strong>C. Load Buffers into Machine</strong>
    <ul>
      <li>a. Make sure all lines are fully submerged</li>
      <li>b. Swap out 92 Well Plate</li>
      <li>c. Check what line corresponds to which buffer:
        <ul>
          <li>Go to File → Instant Run → select method → click next until summary page which lists what lines correspond to which buffer</li>
        </ul>
      </li>
    </ul>
  </li>

  <li><strong>D. Wash FPLC Machine</strong>
    <ul>
      <li>1) On System Control Application: Manual → Pump:
        <ul>
          <li>Change these settings:</li>
          <ul>
            <li>Pump:</li>
            <ul>
              <li>Flow Rate: 5</li>
              <li>Mode: Buffer</li>
            </ul>
            <li>PumpWash: A1 (Press Insert After)</li>
            <li>Loopwash: Bypass (Press Insert After)</li>
          </ul>
          <li>Flowpath:</li>
          <ul>
            <li>InjectionValve: Waste (Press Insert After)</li>
            <li>Column Position: Bypass (Press Insert After)</li>
            <li>Outlet Valve: WasteF1 (Press Insert After)</li>
            <li>InletValve: A1 (Press Insert After)</li>
            <li>Loop Selection: Bypass (Press Insert After)</li>
          </ul>
        </ul>
      </li>

      <li>2) Press Execute</li>

      <li>Replace the column:</li>
      <ul>
        <li>On System Control Application: Manual → Pump:</li>
        <ul>
          <li>Pump:</li>
          <ul>
            <li>Flow Rate: 1 (Press Insert After)</li>
            <li>Mode: Buffer</li>
          </ul>
          <li>Flowpath:</li>
          <ul>
            <li>Column Position: Position1 (Press Insert After)</li>
            <li>OutletValve: WasteF1 (Press Insert After)</li>
            <li>InletValve: A5 (DI H2O) (Press Insert After)</li>
          </ul>
        </ul>
        <li>Execute</li>
        <li>Swapping the Column Out:</li>
        <ul>
          <li>Minimize Exposure to Air</li>
          <li>Unscrew tube attached to top of old column and put cap on the column top</li>
          <li>Remove cap from top of new column and attach line</li>
          <li>Unscrew the old column from the system and cap the bottom</li>
          <li>Remove cap from top of new column and attach line</li>
          <li>Unscrew cap on the bottom of the new column and screw it into the machine</li>
        </ul>
      </ul>
    </ul>
  </li>

  <li><strong>E. Wash Sample Line with DI H2O</strong>
    <ul>
      <li>1) On System Control Application: Manual → Pump:</li>
      <ul>
        <li>Change these settings:</li>
        <ul>
          <li>Pump:</li>
          <ul>
            <li>Flow Rate: 1 (Press Insert After)</li>
            <li>Mode: Buffer</li>
          </ul>
          <li>Flowpath:</li>
          <ul>
            <li>Column Position: Position1 (Press Insert After)</li>
            <li>Outlet Valve: WasteF1 (Press Insert After)</li>
            <li>InletValve: A5 (DI H2O) (Press Insert After)</li>
          </ul>
        </ul>
      </ul>
      <li>Run Method:</li>
      <ul>
        <li>Instant run</li>
        <li>Click on system 1 or 2 depending on what you use</li>
        <li>Summary should show which line goes into each buffer</li>
      </ul>
    </ul>
  </li>

  <li><strong>F. Pump Wash</strong>
    <ul>
      <li>For cleaning up, place the line into ethanol (A8)</li>
    </ul>
  </li>

  <li><strong>G. Regenerating Column</strong>
    <ul>
      <li>1) On System Control Application: Manual → Pump:</li>
      <ul>
        <li>Change these settings:</li>
        <ul>
          <li>Pump:</li>
          <ul>
            <li>Flow Rate: 1</li>
            <li>Mode: Buffer (Press Insert After)</li>
            <li>Pumpwash: B2 (NiSO4) (Press Insert After)</li>
          </ul>
          <li>Flowpath:</li>
          <ul>
            <li>Column Position: Position1 (Press Insert After)</li>
            <li>OutletValve: WasteF1 (Press Insert After)</li>
          </ul>
        </ul>
      </ul>
      <li>Replace Old Column (same process as swapping out with new)</li>
    </ul>
  </li>
</ul>
{/* <h1>FPLC PDF Document</h1>
  <embed src="https://static.igem.org/mediawiki/2021/c/c5/T--UIUC_Illinois--FPLC.pdf" width="100%" height="600px" type="application/pdf"></embed>
         */}
         </div>
    ),
  },
  {
    id: 'nile-red',
    title: 'NILE RED STAINING',
    content: (
      <div className="text-gray-700 mt-4">
        <ul> <li><strong>Materials required</strong> <ul> <li>Ethanol</li> <li>Acetone</li> <li>Nile red dye</li> <li>Microplastics</li> <li>Milli-Q water</li> <li>PCTE (polycarbonate track etch) membrane Filter</li> </ul> </li> <li><strong>Preparation of dye solution</strong> <ul> <li>Add an equal proportion of acetone and ethanol to make it up to 1mL</li> <li>To this mixture, add 20μg of nile red dye</li> </ul> </li> <li><strong>Procedure</strong> <ul> <li>1. Add microplastics to the staining solution and keep it at 50 °C for 10 minutes</li> <li>2. Then microplastics immersed in staining solution are filtered using PCTE membrane filter by vacuum filter method</li> <li>3. Add peptides of interest and stained microplastics to the Ni Nta column and incubate (time=?)</li> <li>4. Add a washing buffer to the column and elute it multiple times to remove unbound microplastics</li> <li>5. Add imidazole to the column and elute it, to collect the peptide-microplastics complex after removing unbound microplastics to the column</li> <li>6. The intensity of the peptide-microplastic complex is measured using UV-fluorescence spectroscopy</li> </ul> </li> </ul>
        

        </div>
        
    ),
  },
  {
    id: 'bradford-test',
    title: 'Bradford Test',
    content: (
      <div className="text-gray-700 mt-4">
        <strong>Procedure:</strong>
        <ul> <li><strong>BRADFORD</strong> <ul> <li><strong>a) Materials Required</strong> <ul> <li>(i) Equipments:</li> <ul> <li>UV visible Spectrophotometer</li> <li>Glass or quartz cuvettes</li> </ul> <li>(ii) Chemicals/reagents:</li> <ul> <li>Bradford reagent :1ml</li> <li>Bovine serum albumin (BSA)</li> <li>NaCl (conc=?)</li> </ul> <li>(iii) Glass wares and others:</li> <ul> <li>Micro Pipettes</li> <li>Micro centrifuge tubes</li> </ul> </ul> </li> <li><strong>b) Reagent Preparation</strong> <ul> <li>BSA stock solution: stock- 2.0mg/ml</li> <li>Working standard: 1mg/ml</li> </ul> </li> <li><strong>c) Procedure</strong> <ul> <li>Make 10x and 100x dilution of protein samples</li> <li>Prepare a blank, set of 5 standards (10, 20, 30, 40, 50µL of BSA) and 3 sample solution of x, 10x and 100x dilutions</li> <li>Make up the volume of all tubes to 100 µL with NaCl solution</li> <li>Add 1 mL of Bradford reagent to all the tubes</li> <li>Vortex all the tubes</li> <li>Measure the absorbance at 595 nm (OD 595)</li> <li>Calculate the protein concentration in the sample from the standard curve for BSA</li> </ul> </li> </ul> </li> </ul>
        {/* <h1>BRADFORD PDF Document</h1>
  <embed src="
https://www.iitg.ac.in/biotech/MTechLabProtocols/Protein%20Extraction%20&%20Protein%20Estimation%20by%20Bradford%20reagent.pdf
" width="100%" height="600px" type="application/pdf"></embed> */}

        </div>
        
    ),
  },
];

const Protocol = () => {
  const [activeLink, setActiveLink] = useState(""); // Track active section
  const sectionsRef = useRef({});

  const handleScroll = (id) => {
    setActiveLink(id);
    const target = document.getElementById(id);
    if (target) {
      const offsetTop =
        target.getBoundingClientRect().top + window.pageYOffset - 200;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    Object.keys(sectionsRef.current).forEach((sectionId) => {
      const section = sectionsRef.current[sectionId];
      if (section) observer.observe(section);
    });

    return () => {
      Object.keys(sectionsRef.current).forEach((sectionId) => {
        const section = sectionsRef.current[sectionId];
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-customCream">
      <Navbar />
      <NewBanner title="Protocols" color="customCream" />
      <div className="p-10 flex flex-row gap-10 bg-white">
        {/* Table of Contents */}
        <div className="p-4 min-w-[300px] h-fit sticky top-28">
          <h1 className="font-nohemi_m mb-4 text-3xl">Table of Contents</h1>
          <ul className="flex flex-col">
            {protocols.map((protocol, index) => (
              <li
                key={index}
                className={`flex items-center font-nohemi_r cursor-pointer py-4 ${
                  activeLink === protocol.id
                    ? "text-blue-500 border-l-2 border-blue-500 pl-5"
                    : "border-l-2 border-gray-500 text-black pl-5"
                }`}
              >
                <a
                  onClick={() => handleScroll(protocol.id)}
                  className="hover:text-blue-500 text-[20px] flex items-center gap-2"
                >
                  {protocol.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Protocol Content */}
        <div className="p-4 flex flex-col gap-20">
          {protocols.map((protocol, index) => (
            <div
              key={index}
              ref={(el) => (sectionsRef.current[protocol.id] = el)}
              id={protocol.id}
              className="flex flex-col gap-6 font-nohemi_m"
            >
              <h1 className="font-nohemi_m text-3xl border-l-4 border-indigo-700 pl-6">
                {protocol.title}
              </h1>
              {protocol.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Protocol;
