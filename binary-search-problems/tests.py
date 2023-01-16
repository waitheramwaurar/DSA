# These are test cases for:
# 1. If the list is empty
# 2. If list has one element which is the required number
# 3. If required number is repeated: consider the first occurrence
# 4. If required number is not in the list
test = {
    'input': {
        'cards': [],
        'num_required': 5
    },
    'times': -1
}
tests = [test, {
    'input': {
        'cards': [5],
        'num_required': 5,
    },
    'times': 0
}, {
             'input': {
                 'cards': [3, 4, 6, 6, 6, 7, 7, 9],
                 'num_required': 6,
             },
             'times': 2
         }, {
             'input': {
                 'cards': [5, 6, 12, 17, 30],
                 'num_required': 33,
             },
             'times': -1
         }]

