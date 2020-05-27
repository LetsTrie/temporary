module.exports = {
  name: 'Birth and Developmental History',
  questions: [
    {
      name: 'Question1',
      inputType: 'text',
      options: undefined,
    },
    {
      name: 'Type of delivery2',
      inputType: 'select',
      options: [
        {
          name: 'Normal Vaginal Delivery(NVD)3',
        },
        {
          name: 'Depression Test(NVD)4',
        },
        {
          name: 'Caesarean Section(CS)5',
          action: true,
          modal: false,
          questions: [
            {
              name: 'Where were you born?6',
              inputType: 'text',
              options: undefined,
            },
            {
              name: 'Type of delivery7',
              inputType: 'select',
              options: [
                {
                  name: 'Normal Vaginal Delivery(NVD)8',
                  action: false,
                  modal: false,
                  questions: undefined,
                  subSections: undefined,
                },
                {
                  name: 'Caesarean Section(CS)9',
                  action: false,
                  modal: false,
                  questions: undefined,
                  subSections: undefined,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  subSections: [
    {
      name: 'Food Habit10',
      questions: [
        {
          name: 'Where were you born?11',
          inputType: 'text',
          options: undefined,
        },
        {
          name: 'Type of delivery12',
          inputType: 'select',
          options: [
            {
              name: 'Normal Vaginal Delivery(NVD)13',
            },
            {
              name: 'Depression Test(NVD)14',
            },
            {
              name: 'Caesarean Section(CS)15',
              action: true,
              modal: false,
              questions: [
                {
                  name: 'Where were you born?16',
                  inputType: 'text',
                  options: undefined,
                },
                {
                  name: 'Type of delivery17',
                  inputType: 'select',
                  options: [
                    {
                      name: 'Normal Vaginal Delivery(NVD)18',
                      action: false,
                      modal: false,
                      questions: undefined,
                      subSections: undefined,
                    },
                    {
                      name: 'Caesarean Section(CS)19',
                      action: false,
                      modal: false,
                      questions: undefined,
                      subSections: undefined,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'Food Habit',
      questions: [
        {
          name: 'Where were you born?[1]',
          inputType: 'text',
          options: undefined,
        },
        {
          name: 'Type of delivery[2]',
          inputType: 'select',
          options: [
            {
              name: 'Normal Vaginal Delivery(NVD)[3]',
            },
            {
              name: 'Depression Test(NVD)[3]',
            },
            {
              name: 'Caesarean Section(CS)[4]',
              action: true,
              modal: false,
              questions: [
                {
                  name: 'Where were you born?[5]',
                  inputType: 'text',
                  options: undefined,
                },
                {
                  name: 'Type of delivery[6]',
                  inputType: 'select',
                  options: [
                    {
                      name: 'Normal Vaginal Delivery(NVD)[7]',
                      action: false,
                      modal: false,
                      questions: undefined,
                      subSections: undefined,
                    },
                    {
                      name: 'Caesarean Section(CS)[8]',
                      action: false,
                      modal: false,
                      questions: undefined,
                      subSections: undefined,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
