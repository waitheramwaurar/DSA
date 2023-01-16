# Optimized solution: reduces runtime complexity
# [1, 4, 6, 9, 12] ... number required = 9
# Solution
# 1. Since the list is sorted in ascending order,
# we can first pick a random number that is at the middle or near the middle
# 2. If the number selected is less than the number that is required, next, move to the numbers
# to the right of the number picked
# 3. If number picked > number required, move to the numbers to the left of the number picked.
# 4. Repeat until the element remaining is the one required

from tests import tests


def test_location(cards, number_required, mid):
    mid_card = cards[mid]

    if mid_card == number_required:
        if mid - 1 >= 0 and cards[mid - 1] == number_required:
            return 'left'
        else:
            return 'found'
    elif mid_card > number_required:
        return 'left'
    else:
        return 'right'


def find_the_card(cards, number_required):
    high = len(cards) - 1
    low = 0

    while low <= high:
        mid = (high + low) // 2  # to avoid getting a float
        mid_card = cards[mid]
        result = test_location(cards, number_required, mid)

        if result == 'found':
            return mid
        elif result == 'right':
            low = mid + 1
        elif result == 'left':
            high = mid - 1

    return -1


print(tests)
result = find_the_card(tests[2]['input']['cards'], tests[2]['input']['num_required'])
print(result)

# First solution without helper function --> failed one of the test cases
# def find_the_card(cards, number_required):
#     high = len(cards) - 1
#     low = 0
#
#     while low <= high:
#         mid = (high + low) // 2 #to avoid getting a float
#         mid_card = cards[mid]
#         if mid_card < number_required:
#             low = mid + 1
#         elif mid_card > number_required:
#             high = mid - 1
#         elif mid_card == number_required:
#             return mid
#     return -1
