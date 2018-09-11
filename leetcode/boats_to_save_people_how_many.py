class Solution:
    def numRescueBoats(self, people, limit):
        """
        :type people: List[int]
        :type limit: int
        :rtype: int
        """
        boats = 0
        people = sorted(people)
        smallest_person = min(people)
        person = people.pop()
        while people:
            if people and (people[0] <= (limit - person)):
                for idx in range(len(people)-1, -1, -1):
                    if people[idx] + person <= limit:
                        people.pop(idx)
                        break
            boats += 1
            person = people.pop()
        return boats