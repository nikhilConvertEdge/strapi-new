import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Combobox, ComboboxOption, Button } from '@strapi/design-system';
// @ts-ignore
import axios from 'axios';
import { PLUGIN_ID } from '../pluginId';

const Select = (props) => {
  const { name, error, description, onChange, value, label, attribute, intlDescription, options } =
    props;
  const { formatMessage } = useIntl();

  const [courses, setCourses] = useState([]);

  const [url, setUrl] = useState('');

  const collectionType = attribute?.options?.collectionType;

  const getMasterCourses = async (search) => {
    try {
      const response = await axios.post(`http://localhost:1337/graphql`, {
        query: `
          query getCourseTemplate1S(
            $page: Int
            $pageSize: Int
            $codeFilter: StringFilterInput
          ) {
            courseTemplate1S(
              filters: { masterCourse: { eq: null }, code: $codeFilter }
              pagination: { page: $page, pageSize: $pageSize }
            ) {
              documentId
              heading
              code
              masterCourse
            }
          }
        `,
        variables: {
          page: 1,
          pageSize: 10,
          codeFilter: {
            containsi: search,
          },
        },
      });

      console.log(response, 'response');

      const fetchedResponse = response?.data?.data?.courseTemplate1S?.map((item) => ({
        name: item?.code,
        value: item?.documentId,
        masterCourse: item?.masterCourse ?? null,
      }));

      if (
        fetchedResponse?.length > 0 &&
        value !== undefined &&
        !fetchedResponse?.some((cat) => cat?.value === value)
      ) {
        getCourseTemplate1SByMasterCourse();
      }
      setCourses(fetchedResponse);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const getCourseTemplate1SByMasterCourse = async () => {
    try {
      const response = await axios.post(`http://localhost:1337/graphql`, {
        query: `
          query getCourseTemplate($id: ID!) {
            courseTemplate1(id: $id) {
              data {
                 documentId
              heading
              code
              masterCourse
              }
            }
          }
        `,
        variables: {
          id: value,
        },
      });

      console.log(response, 'response');

      const fetchedResponse = response?.data?.data?.courseTemplate1?.data;

      if (fetchedResponse) {
        const transformedResponse = {
          name: fetchedResponse.code,
          value: value,
          masterCourse: fetchedResponse?.masterCourse,
        };

        setCourses((prevcourses) => [...prevcourses, transformedResponse]);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const fetchConfig = async () => {
    try {
      const response = await fetch('/custom-dropdown/config');
      const data = await response?.json();
      setUrl(data?.url);
    } catch (err) {
      console.error('Failed to fetch config:', err);
    }
  };

  useEffect(() => {
    fetchConfig();
  }, []);

  const handleInputChange = (e) => {
    const stringValue = e.target.value;
    getMasterCourses(stringValue);
  };

  useEffect(() => {
    getMasterCourses();
  }, [collectionType, url, value]);

  const clearSelection = () => {
    onChange({ target: { name, value: null, type: attribute.type } });
  };

  const handleSelectionChange = (selectedValue) => {
    onChange({
      target: { name, value: selectedValue || null, type: attribute.type },
    });
  };

  const selectedCategory = courses?.find((cat) => cat?.value === value);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {label && (
          <label htmlFor={name} style={{ fontWeight: 'bold' }}>
            {label}
          </label>
        )}
        <div>
          <Combobox
            autocomplete={{
              type: 'list',
              filter: 'contains',
            }}
            onClear={clearSelection}
            placeholder="Search and select masterCourse"
            onInputChange={handleInputChange}
            nullable={true}
            value={value}
            onChange={handleSelectionChange}
            error={error}
            description={description}
          >
            {courses?.map((item) => (
              <ComboboxOption key={item?.value} value={item?.value}>
                {item?.name}
              </ComboboxOption>
            ))}
          </Combobox>
        </div>
        {selectedCategory && (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{
                border: '1px solid #4a4a6a',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 16px',
                width: '100%',
                gap: '15px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                  gap: '20px',
                }}
              >
                {
                  <h1
                    style={{
                      color: '#7b79ff',
                    }}
                  >
                    {selectedCategory?.name}
                  </h1>
                }
                <div
                  style={{
                    backgroundColor: '#181826',
                    padding: '6px 8px',
                    border: '1px solid #4a4a6a',
                    borderRadius: '4px',
                    display: 'flex',
                  }}
                >
                  <h1 style={{ color: '#5cb176' }}>Published</h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
