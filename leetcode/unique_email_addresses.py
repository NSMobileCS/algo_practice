class Solution:
    def numUniqueEmails(self, emails):
        """
        :type emails: List[str]
        :rtype: int
        """
        uniques = set(((self.parse_email(email) for email in emails)))
        return len(uniques)

    def parse_email(self, email):
        local, domain = email.split('@')
        if '+' in local:
            local = local.split('+')[0]
        if '.' in local:
            local = ''.join(local.split('.'))
        return (local, domain,)