/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import {BrowserWindow} from 'electron';

let primaryWindowId: number | undefined;

const getPrimaryWindow = () => {
  return primaryWindowId ? BrowserWindow.fromId(primaryWindowId) : BrowserWindow.getAllWindows()[0];
};

const setPrimaryWindowId = (newPrimaryWindowId: number): void => {
  primaryWindowId = newPrimaryWindowId;
};

const showPrimaryWindow = (): void => {
  const browserWindow = getPrimaryWindow();

  if (browserWindow) {
    if (browserWindow.isMinimized()) {
      browserWindow.restore();
    } else if (!browserWindow.isVisible()) {
      browserWindow.show();
    }

    browserWindow.focus();
  }
};

export {getPrimaryWindow, setPrimaryWindowId, showPrimaryWindow};