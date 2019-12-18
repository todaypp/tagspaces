/**
 * TagSpaces - universal file and folder organizer
 * Copyright (C) 2017-present TagSpaces UG (haftungsbeschraenkt)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License (version 3) as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * @flow
 */

import React from 'react';
import memoize from 'memoize-one';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { sortByCriteria, isObj, isVisibleOnScreen } from '../../../utils/misc';
import i18n from '../../../services/i18n';

const settings = JSON.parse(localStorage.getItem('tsPerspectiveGrid')); // loading settings

type Props = {
  open: boolean,
  onClose: () => void,
  anchorEl: Object,
  handleSortBy: () => void
};

const SortingMenu = (props: Props) => {
  const {
    open,
    onClose,
    sortBy,
    orderBy,
    handleSortBy,
    closeSortingMenu,
    sortingContextMenuAnchorEl
  } = props;

  return (
    <Menu
      anchorEl={props.sortingContextMenuAnchorEl}
      open={props.open}
      onClose={props.onClose}
    >
      {/* <ListSubHeader>Sort by</ListSubHeader> */}
      <MenuItem
        data-tid="gridPerspectiveSortByName"
        onClick={() => {
          props.handleSortBy('byName');
        }}
      >
        <ListItemIcon style={{ minWidth: 25 }}>
          {sortBy === 'byName' &&
            (orderBy ? <ArrowUpIcon /> : <ArrowDownIcon />)}
        </ListItemIcon>
        <ListItemText primary={i18n.t('core:fileTitle')} />
      </MenuItem>
      <MenuItem
        data-tid="gridPerspectiveSortBySize"
        onClick={() => {
          props.handleSortBy('byFileSize');
        }}
      >
        <ListItemIcon style={{ minWidth: 25 }}>
          {sortBy === 'byFileSize' &&
            (orderBy ? <ArrowUpIcon /> : <ArrowDownIcon />)}
        </ListItemIcon>
        <ListItemText primary={i18n.t('core:fileSize')} />
      </MenuItem>
      <MenuItem
        data-tid="gridPerspectiveSortByDate"
        onClick={() => {
          props.handleSortBy('byDateModified');
        }}
      >
        <ListItemIcon style={{ minWidth: 25 }}>
          {sortBy === 'byDateModified' &&
            (orderBy ? <ArrowUpIcon /> : <ArrowDownIcon />)}
        </ListItemIcon>
        <ListItemText primary={i18n.t('core:fileLDTM')} />
      </MenuItem>
      <MenuItem
        data-tid="gridPerspectiveSortByFirstTag"
        onClick={() => {
          props.handleSortBy('byFirstTag');
        }}
      >
        <ListItemIcon style={{ minWidth: 25 }}>
          {sortBy === 'byFirstTag' &&
            (orderBy ? <ArrowUpIcon /> : <ArrowDownIcon />)}
        </ListItemIcon>
        <ListItemText primary={i18n.t('core:fileFirstTag')} />
      </MenuItem>
      <MenuItem
        data-tid="gridPerspectiveSortByExt"
        onClick={() => {
          props.handleSortBy('byExtension');
        }}
      >
        <ListItemIcon style={{ minWidth: 25 }}>
          {sortBy === 'byExtension' &&
            (orderBy ? <ArrowUpIcon /> : <ArrowDownIcon />)}
        </ListItemIcon>
        <ListItemText primary={i18n.t('core:fileExtension')} />
      </MenuItem>
      <MenuItem
        data-tid="gridPerspectiveSortRandom"
        onClick={() => {
          props.handleSortBy('random');
        }}
      >
        <ListItemIcon style={{ minWidth: 25 }}>
          {sortBy === 'random' && <ArrowDownIcon />}
        </ListItemIcon>
        <ListItemText primary={i18n.t('core:random')} />
      </MenuItem>
    </Menu>
  );
};

export default SortingMenu;
