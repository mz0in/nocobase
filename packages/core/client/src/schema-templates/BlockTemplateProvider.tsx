/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import React, { createContext, FC } from 'react';

interface BlockTemplateProviderProps {
  /**
   * 为模板中的 componentName 参数设置一个前缀，用于实现相同区块的模板在不同的上下文中不会互相引用
   */
  componentNamePrefix?: string;
}

const BlockTemplateContext = createContext<BlockTemplateProviderProps>({ componentNamePrefix: '' });

export const BlockTemplateProvider: FC<BlockTemplateProviderProps> = (props) => {
  return (
    <BlockTemplateContext.Provider value={{ componentNamePrefix: props.componentNamePrefix || '' }}>
      {props.children}
    </BlockTemplateContext.Provider>
  );
};

export const useBlockTemplateContext = () => {
  return React.useContext(BlockTemplateContext);
};
