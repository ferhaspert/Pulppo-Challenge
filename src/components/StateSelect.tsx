interface StateSelectProps {
  onStateChange: (state: string) => void;
  states: { name: string }[];
  selectedState: string;
}

export const StateSelect: React.FC<StateSelectProps> = ({
  onStateChange,
  states,
  selectedState,
}) => {
  return (
    <select
      value={selectedState}
      onChange={(e) => onStateChange(e.target.value)}
      className="mb-4"
    >
      <option value="">Seleccione un estado</option>
      {states.map((state) => (
        <option key={state.name} value={state.name}>
          {state.name}
        </option>
      ))}
    </select>
  );
};
