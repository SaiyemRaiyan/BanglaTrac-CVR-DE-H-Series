'use client';

import { useState } from 'react';
import CheckboxGroup from '@/components/CheckboxGroup';
import FormSection from '@/components/FormSection';

interface Page3Props {
  currentSection: number;
}

export default function Page3({ currentSection }: Page3Props) {
  const [checklist, setChecklist] = useState<{ [key: string]: boolean }>({
    // TOP-END - Removal and Disassembly
    'disconnect-batteries': false,
    'disconnect-harness': false,
    'drain-coolant': false,
    'remove-spark-plugs': false,
    'remove-cylinder-heads': false,
    'remove-oil-cooler': false,
    'clean-engine-block': false,

    // TOP-END - Assemble engine
    'install-cylinder-heads': false,
    'install-spark-plugs': false,
    'install-inlet-exhaust': false,
    'install-oil-cooler': false,
    'connect-attachments': false,
    'fill-water-oil': false,
    'install-oil-filter': false,
    'install-breather': false,
    'lubricate-generator': false,
    'adjust-valve-lash': false,
    'start-check-leak': false,
    'recheck-genset': false,
    'load-test': false,

    // IN-FRAME - Removal and Disassembly
    'remove-inlet-exhaust-lines': false,
    'remove-electrical-harness': false,
    'remove-valve-mechanisms': false,
    'remove-cylinder-heads-in': false,
    'remove-oil-cooler-in': false,
    'pull-out-pistons': false,
    'pull-out-liners': false,

    // IN-FRAME - Components cleaning
    'clean-cylinder-block-surface': false,
    'clean-cylinder-heads-spacers': false,
    'clean-rocker-arms': false,
    'clean-cylinder-block-covers': false,
    'clean-bolts-nuts': false,
    'clean-oil-sump': false,

    // IN-FRAME - Assemble engine
    'install-liners-pistons': false,
    'install-cylinder-heads-in': false,
    'install-inlet-exhaust-in': false,
    'install-oil-cooler-in': false,
    'install-pump-lines': false,
    'install-covers-attachments': false,
    'connect-electrical-harness': false,
    'adjust-valve-lash-in': false,
    'install-oil-filter-in': false,
    'pressurize-engine': false,
    'start-check-params': false,
    'load-test-in': false,
  });

  const handleCheckChange = (key: string) => {
    setChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0: // TOP-END Removal and Disassembly
        return (
          <FormSection title="TOP-END OVERHAULING - Removal and Disassembly">
            <div className="space-y-3">
              <CheckboxItem
                id="disconnect-batteries"
                label="Disconnect batteries from engine"
                checked={checklist['disconnect-batteries']}
                onChange={() => handleCheckChange('disconnect-batteries')}
              />
              <CheckboxItem
                id="disconnect-harness"
                label="Disconnect harness (wirings) & breather hoses from engine"
                checked={checklist['disconnect-harness']}
                onChange={() => handleCheckChange('disconnect-harness')}
              />
              <CheckboxItem
                id="drain-coolant"
                label="Drain coolant"
                checked={checklist['drain-coolant']}
                onChange={() => handleCheckChange('drain-coolant')}
              />
              <CheckboxItem
                id="remove-spark-plugs"
                label="Remove spark plugs, after-cooler, exhaust manifolds, inlet manifolds, water elbows and pipes, turbo-chargers"
                checked={checklist['remove-spark-plugs']}
                onChange={() => handleCheckChange('remove-spark-plugs')}
              />
              <CheckboxItem
                id="remove-cylinder-heads"
                label="Remove all the cylinder heads"
                checked={checklist['remove-cylinder-heads']}
                onChange={() => handleCheckChange('remove-cylinder-heads')}
              />
              <CheckboxItem
                id="remove-oil-cooler"
                label="Remove oil cooler & water pumps"
                checked={checklist['remove-oil-cooler']}
                onChange={() => handleCheckChange('remove-oil-cooler')}
              />
              <CheckboxItem
                id="clean-engine-block"
                label="Clean engine block and all attachment components"
                checked={checklist['clean-engine-block']}
                onChange={() => handleCheckChange('clean-engine-block')}
              />
            </div>
          </FormSection>
        );

      case 1: // TOP-END Assemble engine
        return (
          <FormSection title="TOP-END OVERHAULING - Assemble Engine">
            <div className="space-y-3">
              <CheckboxItem
                id="install-cylinder-heads"
                label="Install all cylinder heads, spark plugs and valve mechanisms"
                checked={checklist['install-cylinder-heads']}
                onChange={() => handleCheckChange('install-cylinder-heads')}
              />
              <CheckboxItem
                id="install-spark-plugs"
                label="Install inlet and exhaust manifolds, water pipe, after-cooler"
                checked={checklist['install-spark-plugs']}
                onChange={() => handleCheckChange('install-spark-plugs')}
              />
              <CheckboxItem
                id="install-inlet-exhaust"
                label="Install oil cooler, oil lines, water lines, harness & turbochargers"
                checked={checklist['install-inlet-exhaust']}
                onChange={() => handleCheckChange('install-inlet-exhaust')}
              />
              <CheckboxItem
                id="install-oil-cooler"
                label="Install covers & other attachments"
                checked={checklist['install-oil-cooler']}
                onChange={() => handleCheckChange('install-oil-cooler')}
              />
              <CheckboxItem
                id="connect-attachments"
                label="Connect all electrical wiring & harness into the engine"
                checked={checklist['connect-attachments']}
                onChange={() => handleCheckChange('connect-attachments')}
              />
              <CheckboxItem
                id="fill-water-oil"
                label="Adjust valve lash & others"
                checked={checklist['fill-water-oil']}
                onChange={() => handleCheckChange('fill-water-oil')}
              />
              <CheckboxItem
                id="install-oil-filter"
                label="Install new oil filter & air filters element"
                checked={checklist['install-oil-filter']}
                onChange={() => handleCheckChange('install-oil-filter')}
              />
              <CheckboxItem
                id="install-breather"
                label="Pressurize engine oil system by using kidney loop machine and fill up the engine with new oil up to the correct of level"
                checked={checklist['install-breather']}
                onChange={() => handleCheckChange('install-breather')}
              />
              <CheckboxItem
                id="lubricate-generator"
                label="Start up and check the engine parameters"
                checked={checklist['lubricate-generator']}
                onChange={() => handleCheckChange('lubricate-generator')}
              />
              <CheckboxItem
                id="adjust-valve-lash"
                label="Load testing"
                checked={checklist['adjust-valve-lash']}
                onChange={() => handleCheckChange('adjust-valve-lash')}
              />
              <CheckboxItem
                id="start-check-leak"
                label="Please other page for the load testing result data's"
                checked={checklist['start-check-leak']}
                onChange={() => handleCheckChange('start-check-leak')}
              />
            </div>
          </FormSection>
        );

      case 2: // IN-FRAME Removal and Disassembly
        return (
          <FormSection title="IN-FRAME OVERHAULING - Removal and Disassembly">
            <div className="space-y-3">
              <p className="text-sm text-gray-600 mb-4">Includes the following:</p>
              <CheckboxItem
                id="remove-inlet-exhaust-lines"
                label="Remove water lines, after-cooler, exhaust manifolds, inlet manifolds, water elbows and pipes, oil filter housing and turbo-chargers"
                checked={checklist['remove-inlet-exhaust-lines']}
                onChange={() => handleCheckChange('remove-inlet-exhaust-lines')}
              />
              <CheckboxItem
                id="remove-electrical-harness"
                label="Remove electrical harness & other attachments"
                checked={checklist['remove-electrical-harness']}
                onChange={() => handleCheckChange('remove-electrical-harness')}
              />
              <CheckboxItem
                id="remove-valve-mechanisms"
                label="Remove valve mechanisms"
                checked={checklist['remove-valve-mechanisms']}
                onChange={() => handleCheckChange('remove-valve-mechanisms')}
              />
              <CheckboxItem
                id="remove-cylinder-heads-in"
                label="Remove cylinder heads"
                checked={checklist['remove-cylinder-heads-in']}
                onChange={() => handleCheckChange('remove-cylinder-heads-in')}
              />
              <CheckboxItem
                id="remove-oil-cooler-in"
                label="Remove oil cooler, after cooler, oil pump & water pump"
                checked={checklist['remove-oil-cooler-in']}
                onChange={() => handleCheckChange('remove-oil-cooler-in')}
              />
              <CheckboxItem
                id="pull-out-pistons"
                label="Pull out pistons"
                checked={checklist['pull-out-pistons']}
                onChange={() => handleCheckChange('pull-out-pistons')}
              />
              <CheckboxItem
                id="pull-out-liners"
                label="Pull out liners"
                checked={checklist['pull-out-liners']}
                onChange={() => handleCheckChange('pull-out-liners')}
              />
            </div>
          </FormSection>
        );

      case 3: // IN-FRAME Components cleaning & Assembly
        return (
          <FormSection title="IN-FRAME OVERHAULING - Components Cleaning & Assembly">
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-4 text-blue-600">Components Cleaning at Site</h3>
              <div className="space-y-3">
                <CheckboxItem
                  id="clean-cylinder-block-surface"
                  label="Clean cylinder block surface"
                  checked={checklist['clean-cylinder-block-surface']}
                  onChange={() => handleCheckChange('clean-cylinder-block-surface')}
                />
                <CheckboxItem
                  id="clean-cylinder-heads-spacers"
                  label="Clean cylinder heads spacers plates"
                  checked={checklist['clean-cylinder-heads-spacers']}
                  onChange={() => handleCheckChange('clean-cylinder-heads-spacers')}
                />
                <CheckboxItem
                  id="clean-rocker-arms"
                  label="Clean rocker arms covers"
                  checked={checklist['clean-rocker-arms']}
                  onChange={() => handleCheckChange('clean-rocker-arms')}
                />
                <CheckboxItem
                  id="clean-cylinder-block-covers"
                  label="Clean cylinder block covers"
                  checked={checklist['clean-cylinder-block-covers']}
                  onChange={() => handleCheckChange('clean-cylinder-block-covers')}
                />
                <CheckboxItem
                  id="clean-bolts-nuts"
                  label="Clean all bolts & nuts"
                  checked={checklist['clean-bolts-nuts']}
                  onChange={() => handleCheckChange('clean-bolts-nuts')}
                />
                <CheckboxItem
                  id="clean-oil-sump"
                  label="Clean the oil sump (crankcase)"
                  checked={checklist['clean-oil-sump']}
                  onChange={() => handleCheckChange('clean-oil-sump')}
                />
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="font-semibold text-lg mb-4 text-blue-600">Assemble Engine</h3>
              <div className="space-y-3">
                <CheckboxItem
                  id="install-liners-pistons"
                  label="Install new liners, new pistons, new connecting rod bearings, piston rings"
                  checked={checklist['install-liners-pistons']}
                  onChange={() => handleCheckChange('install-liners-pistons')}
                />
                <CheckboxItem
                  id="install-cylinder-heads-in"
                  label="Install cylinder heads and valve mechanisms"
                  checked={checklist['install-cylinder-heads-in']}
                  onChange={() => handleCheckChange('install-cylinder-heads-in')}
                />
                <CheckboxItem
                  id="install-inlet-exhaust-in"
                  label="Install inlet and exhaust manifolds, water lines & after-cooler & oil filters"
                  checked={checklist['install-inlet-exhaust-in']}
                  onChange={() => handleCheckChange('install-inlet-exhaust-in')}
                />
                <CheckboxItem
                  id="install-oil-cooler-in"
                  label="Install oil pump, oil cooler, water pump, oil lines, water lines, turbocharger and etc..."
                  checked={checklist['install-oil-cooler-in']}
                  onChange={() => handleCheckChange('install-oil-cooler-in')}
                />
                <CheckboxItem
                  id="install-pump-lines"
                  label="Install covers & other attachments"
                  checked={checklist['install-pump-lines']}
                  onChange={() => handleCheckChange('install-pump-lines')}
                />
                <CheckboxItem
                  id="install-covers-attachments"
                  label="Connect all electrical wiring & harness into the engine"
                  checked={checklist['install-covers-attachments']}
                  onChange={() => handleCheckChange('install-covers-attachments')}
                />
                <CheckboxItem
                  id="connect-electrical-harness"
                  label="Adjust valve lash & others"
                  checked={checklist['connect-electrical-harness']}
                  onChange={() => handleCheckChange('connect-electrical-harness')}
                />
                <CheckboxItem
                  id="adjust-valve-lash-in"
                  label="Install new oil filter and air filters element"
                  checked={checklist['adjust-valve-lash-in']}
                  onChange={() => handleCheckChange('adjust-valve-lash-in')}
                />
                <CheckboxItem
                  id="install-oil-filter-in"
                  label="Pressurize engine oil system by using kidney loop machine and fill up the engine with new oil up to the correct of level"
                  checked={checklist['install-oil-filter-in']}
                  onChange={() => handleCheckChange('install-oil-filter-in')}
                />
                <CheckboxItem
                  id="pressurize-engine"
                  label="Start up and check the engine parameters"
                  checked={checklist['pressurize-engine']}
                  onChange={() => handleCheckChange('pressurize-engine')}
                />
                <CheckboxItem
                  id="start-check-params"
                  label="Load testing"
                  checked={checklist['start-check-params']}
                  onChange={() => handleCheckChange('start-check-params')}
                />
                <CheckboxItem
                  id="load-test-in"
                  label="Please other page for the load testing result data's"
                  checked={checklist['load-test-in']}
                  onChange={() => handleCheckChange('load-test-in')}
                />
              </div>
            </div>
          </FormSection>
        );

      default:
        return null;
    }
  };

  return <>{renderSection()}</>;
}

function CheckboxItem({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded border-gray-300 mt-1"
      />
      <span className="text-sm text-gray-700">{label}</span>
    </label>
  );
}
