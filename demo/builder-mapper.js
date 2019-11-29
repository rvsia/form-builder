import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import { componentTypes } from '@data-driven-forms/react-form-renderer';
import { formFieldsMapper } from '@data-driven-forms/mui-component-mapper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useTextFieldStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100%',
  },
}));

const TextField = props => {
  const classes = useTextFieldStyles();
  const Component = formFieldsMapper[componentTypes.TEXT_FIELD];
  return (
    <div className={classes.root}>
      <Component {...props} />
    </div>
  );
};

const CheckBoxField = ({
  preview, id, component, initialized, ...props
}) => {
  const Component = formFieldsMapper[componentTypes.CHECKBOX];
  return <Component {...props} />;
};

const SelectField = ({
  preview, id, component, initialized, options, ...props
}) => {
  const Component = formFieldsMapper[componentTypes.SELECT];
  return <Component {...props} options={options || []} />;
};

const useFieldActionsStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 16,
    heigh: 48,
    alignSelf: 'center',
  },
  editButton: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  deleteButton: {
    '&:hover': {
      color: theme.palette.error.main,
    },
  },
}));

const FieldActions = ({ onSelect, onDelete, fieldData }) => {
  const classes = useFieldActionsStyles();
  return (
    <Box className={classes.root} display="flex">
      <IconButton className={classes.editButton} onClick={onSelect}>
        <EditIcon />
      </IconButton>
      <IconButton className={classes.deleteButton} onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

const FieldLayout = ({ children }) => (
  <Box display="flex" flexDirection="row" justifyContent="space-between" style={{ padding: 8 }}>
    {children}
  </Box>
);

const BuilderColumn = ({ children, ...props }) => (
  <Card {...props}>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);

const DatePickerField = ({preview, id, component, initialized, ...props}) => {
  const Component = formFieldsMapper[componentTypes.DATE_PICKER];
  return <Component {...props} />;
};

const builderMapper = {
  FieldActions,
  FieldLayout,
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.CHECKBOX]: CheckBoxField,
  [componentTypes.SELECT]: SelectField,
  [componentTypes.DATE_PICKER]: DatePickerField,
  BuilderColumn,
};

export default builderMapper;
