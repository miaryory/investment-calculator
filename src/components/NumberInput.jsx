export default function NumberInput({inputName, label, min, max, onEnterValue, value }) {
    return (
        <div>
            <label htmlFor={inputName}>{label}</label>
            <input
                type="number"
                name={inputName}
                min={min}
                max={max}
                value={value}
                onChange={onEnterValue}
            />
        </div>
    );
}