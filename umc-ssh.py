import paramiko

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect('ssh.cluster027.hosting.ovh.net', username='univerq-ps1', password='sshmK2442cm')

stdin, stdout, stderr = ssh.exec_command('ls')
for line in stdout.read().splitlines():
    print(line)

ssh.close()
