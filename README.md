import { Box } from '@mui/material';
import {useEffect} from "react"
import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';
import CustomForm from '@/components/form/CustomForm';
import Title from '@/components/Title';
const BlackList = () => {
  const fieldsFile = [
    {
      label: 'مقدار مربوطه را انتخاب کنید',
      name: 'file-option',
      type: 'select',
      col: 6,
      options: [
        {
          label: 'هش',
          value: 'hash',
        },
        {
          label: 'امضاء',
          value: 'Signature',
        },
      ],
    },
    {
      label: 'مقدار را وارد کنید',
      name: 'value',
      type: 'text',
      col: 6,
    },
    {
      label: 'کامنت خود را بنویسید',
      name: 'comment',
      type: 'text',
      col: 12,
    },
  ];
  const fieldsProcess = [
    {
      label: 'مقدار مربوطه را انتخاب کنید',
      name: 'process-option',
      type: 'select',
      col: 6,
      options: [
        {
          label: 'بر اساس مسیر پردازه',
          value: 'process-path',
        },
        {
          label: 'آرگومان های ورودی',
          value: 'Input-arguments',
        },
      ],
    },
    {
      label: 'مقدار را وارد کنید',
      name: 'value',
      type: 'text',
      col: 6,
    },
    {
      label: 'کامنت خود را بنویسید',
      name: 'comment',
      type: 'text',
      col: 12,
    },
  ];
  const mainField = [
    {
      label: 'مقدار مربوطه را انتخاب کنید',
      name: 'type',
      type: 'select',
      col: 6,
      options: [
        {
          label: 'فایل',
          value: 'file',
        },
        {
          label: 'پردازه',
          value: 'process',
        },
      ],
    },
  ];
  const [optionValue, setOptionValue] = React.useState('');
  const [formData, setFormData] = React.useState('');
  // const [formDaa, setForta] = React.useState('');
  const handleChangeOption = (event) => {
    setOptionValue(event.target.value);
    // console.log(event.target.value);
  };
  const handleEdit = async (formData, rowId) => {
    console.log('handleEdit', formData);
  };
  const handleDelete = (rowId) => {
    console.log('handleDelete', rowId);
  };
  const handleForm = (submittedFormData, rowId) => {
    let formDataToSave = {};
  
    if (optionValue === 'file') {
      formDataToSave = {
        type: 'file',
        'file-option': submittedFormData['file-option'],
        value: submittedFormData.value,
        comment: submittedFormData.comment
      };
    } else if (optionValue === 'process') {
      formDataToSave = {
        type: 'process',
        'process-option': submittedFormData['process-option'],
        value: submittedFormData.value,
        comment: submittedFormData.comment
      };
    }
  
    setFormData(formDataToSave);
    setOptionValue("")
    console.log(formDataToSave);
    resetSelectBoxes(); 
  };
  const resetSelectBoxes = () => {
    // تنظیم مجدد مقادیر سلکت باکس‌ها
    setFormData(prevState => ({
      ...prevState,
      'file-option': '', // تنظیم مجدد مقدار 'file-option' به خالی
      'process-option': '' // تنظیم مجدد مقدار 'process-option' به خالی
    }));
  };
  useEffect(() => {
    // console.log("formData has been updated:", formData);
  }, [formData]);
  return (
    <>
      <Title title='لیست سیاه' />
      <Box>
        {' '}
        <Grid container sx={{ justifyContent: 'space-between' }}>
          <Grid item xs={6}>
            <CustomForm
              fullWidth
              setOptionValue={setOptionValue}
              optionValue={optionValue}
              handleChangeOption={handleChangeOption}
              fields={mainField}
              hiddenButton
            />
           
              <CustomForm
                fullWidth
                fields={optionValue && optionValue == 'file' ? fieldsFile : fieldsProcess }
                onSubmit={handleForm}
                textBtn='ثبت اطلاعات'
                sizeBtn='large'
              />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BlackList;
//////////////////////////////
// SelectField.jsx
import { MenuItem, Select } from '@mui/material';
import { alpha } from '@mui/material/styles';

const SelectField = ({ field, register, errors, theme , setOptionValue,
  optionValue,
  handleChangeOption,}) => {
  return (
    <Select
      size='small'
      {...register(field.name)}
      fullWidth
      error={errors[field.name] ? true : false}
      value={optionValue && optionValue }
      onChange={handleChangeOption && handleChangeOption }
      sx={{
        '&:hover': {
          '&& fieldset': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.dark, 0.25)}`,
          },
        },
        '& .MuiOutlinedInput-root': {
          borderRadius: `${theme.shape.borderRadius}px`,
          '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
            boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.dark, 0.25)}`,
          },
        },
      }}
    >
      {field.options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectField;
/////////////////////////////////
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const CustomTab = () => {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
      // sx={{width: 'auto', '& div.MuiTabs-flexContainer': { justifyContent: 'space-between' } }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            hidden: true,
          }}
          sx={{
            bgcolor: theme.palette.grey[isLight ? 200 : 500_8],
            borderRadius: '17px',
            '& button': { borderRadius: '15px', width: '50%' },
            '& button.Mui-selected': { bgcolor: 'white' },
            padding: '5px',
          }}
          aria-label='secondary tabs example'
          centered
        >
          <Tab value='one' label='آپلود فایل' />
          <Tab value='two' label='از طریق متن' />
        </Tabs>
      </Box>
    </>
  );
};

export default CustomTab;
///////////////////////////
// SwitchField.jsx
import { Typography, Switch } from '@mui/material';

const SwitchField = ({ field, register, theme }) => {
  return (
    <>
      <Typography variant='span' sx={{ m: '0px 10px 0px 0px' }}>
        {field.switchLabel}
      </Typography>
      <Switch
        {...register(field.name)}
        checked={register(field.name).value}
        onClick={field.onClick}
        sx={{
          width: 42,
          height: 26,
          padding: 0,
          '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: '2px',
            transitionDuration: '300ms',
            '&.Mui-checked': {
              transform: 'translateX(16px)',
              color: '#fff',
              '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.primary,
                opacity: 1,
                border: 0,
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
              },
            },

            '&.Mui-disabled .MuiSwitch-thumb': {
              color:
                theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
              opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
          },
          '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
          },
          '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
              duration: 500,
            }),
          },
        }}
      />
    </>
  );
};

export default SwitchField;
/////////////////////////
import { TextareaAutosize } from '@mui/material';
import { styled } from '@mui/material';

const TextareaField = ({ field, register, errors, theme }) => {
  const isLight = theme.palette.mode === 'light';
  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `

    &:focus {
      box-shadow: 0 0 0 1.5px ${theme.palette.primary.main};
    }
    &:focus-visible {
      outline: 0;
    }
  `
  );
  return (
    <StyledTextarea
      fullWidth
      {...register(field.name, { required: field.required })}
      aria-label={field.label}
      rows={field.rows}
      defaultValue={field.defaultValue}
      disableEnforceFocus={true}
      disableAutoFocus={true}
      style={{
        color: theme.palette.grey[isLight ? 700 : 0],
        border: errors[field.name]
          ? `1px solid ${theme.palette.error.main}`
          : `1px solid ${theme.palette.grey[isLight ? 500 : 600]}`,
        fontSize: '16px',
        borderRadius: '10px',
        background: theme.palette.grey[isLight ? 100 : 1000],
        maxWidth: '100%',
        minWidth: 350,
        minHeight: 90,
        fontFamily: 'inherit',
      }}
    />
  );
};

export default TextareaField;
////////////////////////
import { FormHelperText, IconButton, InputAdornment, TextField } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

const TextFieldComponent = ({
  field,
  register,
  errors,
  theme,
  showPassword,
  handleTogglePasswordVisibility,
}) => {
  if (!Object.keys(field).length) {
    return null; // if field object is empty, show nothing
  }
  return (
    <>
      <TextField
        autoComplete={field.type === 'password' ? 'new-password' : 'off'}
        key={field.name}
        {...register(field.name)}
        type={field.type === 'password' ? (showPassword ? 'text' : 'password') : field.type}
        size='small'
        fullWidth
        error={errors[field.name] ? true : false}
        helperText={errors[field.name] && errors[field.name].message}
        InputProps={{
          ...(field.type === 'password' && {
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                </IconButton>
              </InputAdornment>
            ),
          }),
          ...(field.disabled && {
            disabled: true, // Add readOnly property if field.readOnly is truthy
          }),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: `${theme.shape.borderRadius}px`,
            '& .MuiInputBase-inputAdornedEnd': {
              borderRadius: `0`,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.primary.main,
              boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.25)}`,
            },

            '& .MuiOutlinedInput-input:-webkit-autofill': {
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 0 100px ${theme.palette.grey[0]} inset`
                  : `0 0 0 100px ${theme.palette.grey[1100]} inset`,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.primary.main,
              boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.25)}`,
            },
          },
        }}
      />
      <FormHelperText id='component-helper-text'>{field.placeholder}</FormHelperText>
    </>
  );
};

export default TextFieldComponent;
///
