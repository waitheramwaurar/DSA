# PROBLEM
# Alice has got some cards with numbers written on them. She arranges the cards in decreasing order
# and lays them out in a sequence on a table. She challenges Bob to pick out a card containing a given card
# by turning over as few cards as possible. Write a function to help Bob locate the card.

# First Solution
# input - cards
# output - number of cards turned to access a given card, times

# Example
# Input: cards = [13, 17, 19, 23, 29, 31, 37]
# num_required = 31
# times = 5

# Edge cases
# 1. If list is empty
# 2. If list has one element, which is the required number
# 3. If the required number is repeated
# 4. If the number does not exist in the list
# 5. If the number is the first, mid or last in the array

from tests import tests

# First Solution Implementation
def find_card(cards, num_required):
    position = 0

    while position <= len(cards) - 1:
        if num_required == cards[position]:
            return position
        position += 1

    return -1

# cards = [13, 17, 19, 23, 29, 31, 37]
# print(find_card(cards, 31))
# cards = [3, 4, 6, 6, 6, 7, 9]
# print(find_card(cards, 11))

# Test cases for some edge cases
# 1. When list is empty


print(tests)
result = find_card(tests[1]['input']['cards'], tests[1]['input']['num_required'])
print(result)
