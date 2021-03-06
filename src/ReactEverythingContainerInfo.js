/**
 * Copyright 2016-present, ccckblaze
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
'use strict';

var ReactEverythingContainerInfo = function (rootInstance, containerName) {
    return {
        _rootInstance: rootInstance,
        _containerName: containerName
    };
};

module.exports = ReactEverythingContainerInfo;
