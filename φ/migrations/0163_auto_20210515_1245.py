# Generated by Django 3.1.4 on 2021-05-15 17:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0162_auto_20210515_1245'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entity',
            old_name='CommonSharesOutstanding',
            new_name='CommonSharesOutstandingLastYear',
        ),
    ]
