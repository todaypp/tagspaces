import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

export interface Props {
  entries: Array<any>;
  path: string;
}

export const FilesDragPreview = (props: Props) => {
  const { entries, path } = props;
  return (
    <Chip
      size="small"
      avatar={<Avatar>{entries.length}</Avatar>}
      label="files selected"
      color="primary"
    />
  );
};
const areEqual = (prevProp, nextProp) => nextProp.path === prevProp.path;
export default React.memo(FilesDragPreview, areEqual);
