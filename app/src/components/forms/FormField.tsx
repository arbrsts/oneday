import { Field, FieldAttributes } from 'formik';

interface FormFieldProps extends FieldAttributes<any> {
    label: string;
    error?: string;
  }
  
  const FormField: React.FC<FormFieldProps> = ({ label, error, ...props }) => {
    return (
      <div className="flex flex-col mb-5">
        <label htmlFor={props.id} className="text-gray-600 text-base font-sans font-normal leading-normal">
          {label}
        </label>
        {error && <div className="text-sm font-sans font-normal leading-normal text-red-500">{error}</div>}
        <Field
          className={`rounded border ${error ? 'border-red-500' : 'border-gray-600'}`}
          {...props}
        />
      </div>
    );
  };
  
  export default FormField;
  