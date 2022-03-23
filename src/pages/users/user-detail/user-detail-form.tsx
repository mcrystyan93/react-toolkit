import { Box, Stack, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { object, SchemaOf, string } from 'yup';

interface Props {
  user?: Partial<User>;
  onFormSubmit: (user: Partial<User>) => void;
};

const initialValue: Partial<User> = { firstName: '', lastName: '', position: '' };
export const UserDetailForm: React.FC<Props> = ({ user = initialValue, onFormSubmit }) => {

  const validationSchema: SchemaOf<UserFormSchema> = object({
    firstName: string().required('First name is required'),
    lastName: string().required('Last name is required'),
    position: string().required('Position is required'),
  });

  const formik = useFormik({
    initialValues: user,
    validationSchema: validationSchema,
    onSubmit: value => {
      onFormSubmit(value);
    }
  });

  return (
    <>
      <Box component="form" id="userForm" onSubmit={formik.handleSubmit} noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
        <Stack spacing={2}>
          {/* FIRST NAME */}
          <TextField id="firstNameInput" name="firstName" label="First name" variant="standard" required fullWidth
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && !!formik.errors.firstName}
            helperText={formik.touched.firstName && formik.errors.firstName} />
          {/* LAST NAME */}
          <TextField id="lastNameInput" name="lastName" label="Last name" variant="standard" required fullWidth
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && !!formik.errors.lastName}
            helperText={formik.touched.lastName && formik.errors.lastName} />
          {/* POSITION */}
          <TextField id="positionInput" name="position" label="Position" variant="standard" required fullWidth
            value={formik.values.position}
            onChange={formik.handleChange}
            error={formik.touched.position && !!formik.errors.position}
            helperText={formik.touched.position && formik.errors.position} />
        </Stack>
      </Box>
    </>
  );

}