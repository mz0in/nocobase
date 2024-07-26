/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import React, { useState } from 'react';
import { FormItem, Input, Space } from '@nocobase/client';
import { Radio } from 'antd';
import { ArrayField as ArrayFieldModel, VoidField } from '@formily/core';
import { ArrayField, Field, useField, observer } from '@formily/react';
import { useNotificationTranslation } from '../../../../locale';

const ConfigForm = observer(
  () => {
    const field = useField<ArrayFieldModel>();
    const { t } = useNotificationTranslation();
    const AddItem = () => {
      field.push('');
    };
    return (
      <>
        <div>
          {field.value?.map((item, index) => {
            return (
              <div key={index} style={{ display: 'flex-block', marginBottom: 10 }}>
                <Space>
                  <Field name={index} component={[Input]}></Field>
                  <a onClick={() => field.remove(index)}>{t('Remove')}</a>
                </Space>
              </div>
            );
          })}
        </div>

        <a onClick={AddItem}>{t('Add')}</a>
      </>
    );
  },
  { displayName: 'ConfigForm' },
);
const ReceiverConfigForm = () => {
  const [inputType, setInputType] = useState('manual');
  const options = [
    {
      label: 'manual Input',
      value: 'manual',
    },
    {
      label: 'collection',
      value: 'collection',
    },
    {
      label: 'import',
      value: 'import',
    },
  ];
  return (
    <div>
      <Radio.Group options={options} value={inputType} optionType="button" buttonStyle="solid"></Radio.Group>
      <ArrayField name="receivers" component={[ConfigForm]} disabled={false} />
    </div>
  );
};

export default ReceiverConfigForm;