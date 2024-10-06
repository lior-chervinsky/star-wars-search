import type { FieldApi } from '@tanstack/react-form';
import { useForm } from '@tanstack/react-form';
import { PeopleResult } from '../../SearchPage/SearchResult.interface.ts';

type CharacterData = Pick<PeopleResult, 'name' | 'gender' | 'birth_year'>;

const FieldInfo = ({ field }: { field: FieldApi<any, any, any, any> }) => (
  <>
    {field.state.meta.isTouched && field.state.meta.errors.length ? (
      <em>{field.state.meta.errors.join(', ')}</em>
    ) : null}
    {field.state.meta.isValidating ? 'Validating...' : null}
  </>
);

interface CharacterFormProps {
  initialValue?: Partial<PeopleResult>;
  onSave: (newCharacter) => void;
}

const genderOptions = ['female', 'male', 'n/a'];

export const CharacterForm = ({
  initialValue = {},
  onSave = () => {},
}: CharacterFormProps) => {
  const form = useForm<CharacterData>({
    defaultValues: {
      name: initialValue.name || '',
      gender: initialValue?.gender || '',
      birth_year: initialValue?.birth_year || '',
    },
    onSubmit: ({ value }) => {
      onSave(value);
    },
  });

  return (
    <div>
      <h1>Simple Form Example</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div>
          <form.Field
            name="name"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? 'A name is required'
                  : value.length < 3
                    ? 'Name must be at least 3 characters'
                    : undefined,
            }}
            children={field => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <>
                  <label htmlFor={field.name}>Name:</label>
                  <input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </>
              );
            }}
          />
        </div>
        <div>
          <form.Field
            name="gender"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? 'Gender is required'
                  : value !== 'male' && value !== 'female' && value !== 'n/a'
                    ? 'Gender must be male or female or n/a '
                    : undefined,
            }}
            children={field => (
              <>
                <label htmlFor={field.gender}>Gender:</label>
                {/*<input*/}
                {/*  id={field.gender}*/}
                {/*  name={field.gender}*/}
                {/*  value={field.state.value}*/}
                {/*  onBlur={field.handleBlur}*/}
                {/*  onChange={e => field.handleChange(e.target.value)}*/}
                {/*/>*/}
                {genderOptions.map(option => (
                  <>
                    <input
                      type="radio"
                      id={option}
                      name="experience"
                      value={option}
                      checked={field.state.value === option}
                      onBlur={field.handleBlur}
                      onChange={e => field.handleChange(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <label
                      htmlFor={option}
                      className="ml-2 text-sm cursor-pointer"
                    >
                      {option}
                    </label>
                  </>
                ))}
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <div>
          <form.Field
            name="birth_year"
            validators={{
              onChange: ({ value }) =>
                !value ? 'Birth Year is required' : undefined,
            }}
            children={field => (
              <>
                <label htmlFor={field.birth_year}>Birth Year:</label>
                <input
                  id={field.birth_year}
                  name={field.birth_year}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={e => field.handleChange(e.target.value)}
                />
                <FieldInfo field={field} />
              </>
            )}
          />
        </div>
        <form.Subscribe
          selector={state => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button type="submit" disabled={!canSubmit}>
              {isSubmitting ? '...' : 'Submit'}
            </button>
          )}
        />
      </form>
    </div>
  );
};
